num = int(input("Informe o numero que você deseja verificar se faz parte da sequência de fibonacci: "))
ini = 1
ant = 0
prox = 0

while(prox < num):

        prox = ant + ini
        ant = ini
        ini = prox

if(prox > num):
    print("O numero informado {",num,"}, não pertence a sequência de fibonacci")
else: 
    print("O numero informado {",num,"}, pertence a sequência de fibonacci")