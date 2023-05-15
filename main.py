from ui.password_generator_ui import *

if __name__ == "__main__":
    window.mainloop()


# Logica medinate la consola
# import string
# import secrets
#
#
# def generate_password(length=12):
#    alphabet = string.ascii_letters + string.digits + string.punctuation
#    while True:
#        password = "".join(secrets.choice(alphabet) for i in range(length))
#        if (
#            any(c.islower() for c in password)
#            and any(c.isupper() for c in password)
#            and any(c.isdigit() for c in password)
#            and any(c in string.punctuation for c in password)
#        ):
#            break
#    return password
#
#
# def main():
#    password = generate_password()
#    print("La contraseña generada es:", password)
#
#
# if __name__ == "__main__":
#    main()
