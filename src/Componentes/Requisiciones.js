import React from 'react';

class Requisiciones extends React.Component{
    render (){
        return(
            <h1>REQUISICIÓN DEL PERSONAL </h1>

            

            <h3>DATOS RELACIONADOS AL PUESTO</h3>
            <p>Nombre del puesto</p>
            <input type="text" name="contenido"/>

            <p>Dirección funcional/Departamento</p>
            <input type="text" name="contenido"/>

            <p>Nombre del jefe inmediato</p>
            <input type="text" name="contenido"/>

            <p>PUESTO VACANTE</p>
            <p>Tipo de contratación</p>
            <label><input type="checkbox"/> Obra determinada</label>
            <label><input type="checkbox"/>Tiempo indeterminado</label>
            <label>¿Cuánto tiempo?<input type="text"/></label>

            <p>VACANTE A CUBRIR</p>
            <p>Para:</p>
            <label><input type="checkbox"/>Puesto nuevo</label>
            <label><input type="checkbox"/>Reemplazo</label>
            <label>¿A quién reemplaza?<input type="text"/></label>

            <h3>REQUISITOS QUE DEBE CUBRIR</h3>
            <p>Edad</p>
            <input type="text" name="contenido"/>

            <p>Estado civil</p>
            <input type="text" name="contenido"/>

            <p>Sexo</p>
            <input type="text" name="contenido"/>

            <p>Escolaridad</p>
            <input type="text" name="contenido"/>

            <p>Idioma(Especifique cual y porcentaje)</p>
            <input type="text" name="contenido"/>

            <p>Disponibilidad para viajar</p>
            <input type="text" name="contenido"/>

            <p>Experiencia (Tiempo y ocupación)</p>
            <input type="text" name="contenido"/>


            <h3>CONDICIONES DE TRABAJO</h3>
            <p>Lugar de trabajo</p>
            <input type="text" name="contenido"/>

            <p>Horario</p>
            <input type="text" name="contenido"/>

            <p>Sueldo</p>
            <input type="text" name="contenido"/>


            <h3>DATOS DEL DEPARTAMENTO SOLICITANTE</h3>
            <p>Entrevistador</p>
            <input type="text" name="contenido"/>

            <p>Horario</p>
            <input type="text" name="contenido"/>


            <h3>AUTORIZACIÓN</h3>

            <p>Director de área (Nombre y firma)</p>
            <input type="text" name="contenido"/>

            <p>Dirección de recursos humanos (Nombre y firma)</p>
            <input type="text" name="contenido"/>
        )
    
    
    }
}
export default Requisiciones;  