# Formulario
git clone https://github.com/BarujHaro/Formulario.git
cd Formulario
git submodule update --init --recursive
cd client
no guarda al darle click
const handleGuardarClick = async () => {
      try {
        const response = await fetch('/guardar-datos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: datos.nombre,
            correo: datos.correo,
            contrasena: datos.contrasena,
            roadmap: roadmapF,
            creditos: creditos,
          }),
        });
  
        if (response.ok) {
          // Los datos se guardaron con éxito
          // Puedes mostrar un mensaje al usuario o redirigirlo a otra página si es necesario
        } else {
          // Maneja errores en caso de que la inserción falle
        }
      } catch (error) {
        console.error(error);
      }
    };
reistros.js
 return (
    <div className='formulario'>
      <div className='datos-alumno'>
      <h2 className='titulo'>Registro de Alumnos</h2>
      
      <NombreCorreo guardarDatos={guardarDatos} />////componente para guardar los datos, se puede eliminar si ya se tienen los datos
      </div>
      
      <div className='cuestionario-materia-cursada'>////en componentes se muestran las materias, con su cuestionario para guardarlo en roadmap,
      <h2 className='titulo'>Selección de Materias</h2>
      <Materias
          semestre='1'
          materias={["Programación", "Seminario de solución de problemas de programación", "Matemática discreta", "Métodos matemáticos I", "Especializante selectiva introducción a la física", "Seminario de solución de problemas de métodos matemáticos I"]} // Lista de materias 
          anadirAlRoadmap={anadirAlRoadmap}
        />
        </div>
      <div className='BtnF'>//////este seria el bton final que al presionarlo guardaria todos los datos recolectados
      
        <CalculoCreditos roadmap={roadmap} guardarCreditos={guardarCreditos} />//modulo para calcular y guardar los creditos
       
        <p><Roadmap roadmap={roadmap} guardarRoadmapF = {guardarRoadmapF}/> </p>//modulopara crear roadmap
       
        <Button variant="contained" onClick={handleGuardarClick} >
      Guardar Datos
      </Button>
      </div>
    </div>
  );


  
