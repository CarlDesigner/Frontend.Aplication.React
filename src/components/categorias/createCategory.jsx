function CreateCategory(props) {
    return (
        <div>
            <h3>Crear Categoria</h3>
            <div className="w-75 mx-auto">
                <form>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Nombre Categoria"
                            name="category_name"
                            minLength={3}
                            required={true}
                        />
                        <label for="floatingInput">Nombre Categoria</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingDescrip"
                            placeholder="Descripcion Categoria"
                            name="category_description"
                            minLength={3}
                            required={true}
                        />
                        <label for="floatingDescrip">
                            Descripcion Categoria
                        </label>
                    </div>
                    <button
                        class="w-100 btn btn-lg btn-outline-success"
                        type="submit"
                    >
                        Crear
                    </button>
                </form>
            </div>
        </div>
    );

}

export default CreateCategory;