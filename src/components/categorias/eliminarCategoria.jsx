import { getCategoryById } from "../../js/getData";
import { useParams } from "react-router-dom";

function EliminarCategoria(props) {
    let { idCategoria } = useParams();
    let category = getCategoryById(idCategoria);
    if (!category) {
        category = {};
    }
    return (
        <div className="w-75 mx-auto">
            <h3>Eliminar Categoria</h3>
            <form>
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="floatingInput2"
                        placeholder="Id Categoria"
                        name="category_id"
                        required={true}
                        readOnly={true}
                        value={category.id}
                    />
                    <label for="floatingInput2">Id Categoria</label>
                </div>
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Nombre Categoria"
                        name="category_name"
                        minLength={3}
                        required={true}
                        defaultValue={category.name}
                        readOnly={true}
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
                        defaultValue={category.description}
                        readOnly={true}
                    />
                    <label for="floatingDescrip">Descripcion Categoria</label>
                </div>
                <button
                    class="w-100 btn btn-lg btn-danger"
                    type="submit"
                >
                    Eliminar
                </button>
            </form>
        </div>
    );
}

export default EliminarCategoria;
