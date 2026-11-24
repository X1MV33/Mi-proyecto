# Corazón hecho con "te amo" en muchos idiomas (Python + turtle)
# Cómo usarlo: instala Python (python.org), guarda este archivo y ábrelo con doble clic,
# o en la terminal escribe:  python corazon_te_amo.py
import math
import random
import time
import turtle

FRASES = [
    "Te amo", "I love you", "Je t'aime", "Ti amo", "Eu te amo", "Ich liebe dich",
    "Ik hou van jou", "Jag älskar dig", "Jeg elsker deg", "Kocham cię", "Miluji tě",
    "Я тебя люблю", "Σ' αγαπώ", "Seni seviyorum", "أحبك", "אני אוהב אותך",
    "मैं तुमसे प्यार करता हूँ", "我爱你", "愛してる", "사랑해", "Anh yêu em",
    "Aku cinta kamu", "Mahal kita", "ฉันรักคุณ", "Nakupenda", "Te iubesc",
    "Szeretlek", "Volim te", "T'estimo", "Maite zaitut", "Mi amas vin",
    "دوستت دارم", "Ngiyakuthanda", "Nimitztlazohtla", "Minä rakastan sinua",
]

ROJOS = ["#FF1F3D", "#E0102F", "#FF4D6A", "#C8102E", "#FF6B81"]
ESCALA = 18          # tamaño del corazón
PALABRAS_BORDE = 70  # palabras en la orilla
PALABRAS_RELLENO = 260

pantalla = turtle.Screen()
pantalla.setup(900, 800)
pantalla.bgcolor("black")
pantalla.title("Te amo ❤")
pantalla.tracer(0)

lapiz = turtle.Turtle()
lapiz.hideturtle()
lapiz.penup()


def punto_corazon(t):
    """Punto de la orilla del corazón (fórmula clásica)."""
    x = 16 * math.sin(t) ** 3
    y = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)
    return x * ESCALA, y * ESCALA + 40


# contorno un poco más chico para que el relleno no se salga de la orilla
CONTORNO = [(x * 0.9, (y - 40) * 0.9 + 40) for x, y in (punto_corazon(2 * math.pi * k / 200) for k in range(200))]


def dentro_del_corazon(x, y):
    """True si el punto (x, y) cae dentro del corazón (prueba del rayo)."""
    dentro = False
    j = len(CONTORNO) - 1
    for i in range(len(CONTORNO)):
        xi, yi = CONTORNO[i]
        xj, yj = CONTORNO[j]
        if (yi > y) != (yj > y) and x < (xj - xi) * (y - yi) / (yj - yi) + xi:
            dentro = not dentro
        j = i
    return dentro


def escribir(x, y, texto, tam):
    lapiz.goto(x, y)
    lapiz.color(random.choice(ROJOS))
    lapiz.write(texto, align="center", font=("Arial", tam, "bold"))


# 1) dibuja la orilla del corazón, palabra por palabra
for i in range(PALABRAS_BORDE):
    t = 2 * math.pi * i / PALABRAS_BORDE
    x, y = punto_corazon(t)
    escribir(x, y, FRASES[i % len(FRASES)], random.choice([9, 10, 11]))
    pantalla.update()
    time.sleep(0.03)

# 2) rellena el corazón con más frases
puestos = 0
intentos = 0
while puestos < PALABRAS_RELLENO and intentos < 20000:
    intentos += 1
    x = random.uniform(-ESCALA * 16, ESCALA * 16)
    y = random.uniform(-ESCALA * 17 + 40, ESCALA * 13 + 40)
    if dentro_del_corazon(x, y):
        escribir(x, y, random.choice(FRASES), random.choice([7, 8, 9, 10]))
        puestos += 1
        if puestos % 4 == 0:
            pantalla.update()

# 3) mensaje en el centro
lapiz.goto(0, -10)
lapiz.color("white")
lapiz.write("Te amo ❤", align="center", font=("Arial", 26, "bold"))
pantalla.update()

turtle.done()
