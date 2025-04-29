import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.settimeout(2)
for port in [80, 443, 21, 22, 53, 110, 993]:
    result = sock.connect_ex(('8.8.8.8',port))
    if result == 0:
        print ('Porta Aberta:', port)
    else:
        print ('Porta Fechada:', port)