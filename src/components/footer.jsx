import Navlinks from "./navlinks";

function Footer(props) {
    return (
        <div class="container">
            <footer class="py-3 my-4">
                <Navlinks footer={true}></Navlinks>
                    <p class="text-center text-muted">© 2022 Company, Inc</p>
            </footer>
        </div>
    );
}

export default Footer;