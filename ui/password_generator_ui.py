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
# Definir tamaño de la ventana
window.geometry("400x300+{}+{}".format(int((window.winfo_screenwidth() - 400) / 2), int((window.winfo_screenheight() - 300) / 2)))

# Crear etiqueta para mostrar la contraseña
password_label = tk.Label(window, text="", font=("Arial", 12))  # Agregar fuente y tamaño
password_label.pack(side=tk.TOP, pady=10)  # Colocar la etiqueta arriba de todo, con un margen inferior

# Crear botón para generar la contraseña
generate_button = tk.Button(window, text="Generar contraseña", font=("Arial", 12), command=generate_password_button)
generate_button.pack(side=tk.BOTTOM, pady=10)  # Colocar el botón debajo de todo, con un margen superior

# Mostrar ventana
window.mainloop()
