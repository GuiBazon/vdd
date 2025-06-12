import time
import os
import webbrowser
import random

def limpar_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

def digitar(texto, delay=0.05):
    for letra in texto:
        print(letra, end='', flush=True)
        time.sleep(delay)
    print()

def coracoes_subindo(qtd=15):
    for _ in range(qtd):
        espacos = " " * random.randint(0, 40)
        print(espacos + "❤️")
        time.sleep(0.1)

def main():
    limpar_terminal()

    print(r"""
    
    """)

    time.sleep(1)

    mensagem = (
        "\nCarol...\n"
        "\n Eu te amo.\n"
        "Feliz Dia dos Namorados! ❤️\n"
    )

    digitar(mensagem, delay=0.045)

    coracoes_subindo()

    time.sleep(1)
    print("\nAbrindo a surpresa no navegador em 3... 2... 1...\n")
    time.sleep(1)
    webbrowser.open('index.html')

if __name__ == "__main__":
    main()
