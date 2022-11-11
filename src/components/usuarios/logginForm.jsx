function LogginForm(props) {
    return (
        <div className="w-75 text-center mx-auto">
            <main class="form-signin">
                <form>
                    <img class="mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating my-">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating my-2">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary my-2" type="submit">Login</button>
                    <p class="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </main>
        </div>
    );
}

export default LogginForm;