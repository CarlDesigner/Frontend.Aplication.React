import string
import secrets
import tkinter as tk

def generate_password(length=12):
    alphabet = string.ascii_letters + string.digits + string.punctuation
    while True:
        password = ''.join(secrets.choice(alphabet) for i in range(length))
        if (any(c.islower() for c in password)
            and any(c.isupper() for c in password)
            and any(c.isdigit() for c in password)
            and any(c in string.punctuation for c in password)):
            break
    return password

def generate_password_button():
    password = generate_password()
    password_label.config(text=password)

# Crear ventana
window = tk.Tk()
window.title("Generador de contraseñas")

# Crear botón
generate_button = tk.Button(window, text="Generar contraseña", command=generate_password_button)
generate_button.pack(pady=10)

# Crear etiqueta
password_label = tk.Label(window, text="")
password_label.pack()

# Mostrar ventana
window.mainloop()
