import "../css/perfil.css";

function Perfil(){
    return(
        <main>
            <section className="perfil">
                <img src="../../public/img/perfil.png" alt="Foto de Perfil"/>
                <div className="datos">
                    <p>Apellido: Farfan</p>
                    <p>Nombre: Facundo Joaquin</p>
                    <p>Rol: Alumno</p>
                </div>
            </section>
        </main>
    );
}
export default Perfil;