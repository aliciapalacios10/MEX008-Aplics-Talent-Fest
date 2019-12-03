// import React from 'react';
import React, { Component } from 'react';
import {firebaseConf} from '../Firebase/firebase';
import './Requisicion.css';

class Requisicion extends Component {

    // inicializamos nuestro estado inicial
    constructor(props) {
      super(props);
      this.state = {
        form: [],
        alert: false,
        alertData: {}
      };
    }
    // Mostrar una alerta cuando se envia el formulario
    showAlert(type, message) {
      this.setState({
        alert: true,
        alertData: { type, message }
      });
      setTimeout(() => {
        this.setState({ alert: false });
      }, 4000)
    }
    // Con esta funcion borramos todos los elementos del formulario
    resetForm() {
      this.refs.contactForm.reset();
    }
    // Funcion para enviar la informacion del formulario a Firebase Database
    sendMessage(e) {
      // Detiene la acción predeterminada del elemento
      e.preventDefault();
      // Creamos un objeto con los valores obtenidos de los inputs
      const params = {
        name: this.inputName.value,
        department: this.inputDepartment.value,
        area: this.inputArea.value,
        contract: this.inputContract.value,
        number: this.inputNumber.value,
        job: this.inputJob.value,
        replacement: this.inputReplacement.value,
        scholarship: this.inputScholarship.value,
        language: this.inputLanguage.value,
        travel: this.inputTravel.value,
        experience: this.inputExperience.value,
        place: this.inputPlace.value,
        workingHours: this.inputWorkingHours.value,
        salary: this.inputSalary.value,
        approved: this.inputApproved.value,
        message: this.textAreaMessage.value
      };
      // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
      if (params.name && params.department && params.area && params.contract && params.number && params.job && params.replacement
        && params.scholarship && params.language && params.travel && params.experience && params. place && params. workingHours 
        && params.salary && params.approved &&params.message) {
        // enviamos nuestro objeto "params" a firebase database
        console.log(firebaseConf.auth().currentUser)
        firebaseConf.database().ref('paramsform').push(params).then(() => {
          // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
          this.showAlert('success', 'Your message was sent successfull');
        }).catch((e) => {
          // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error 
          console.error(e);
          this.showAlert('danger', 'Your message could not be sent');
        });
        // limpiamos nuestro formulario llamando la funcion resetform
        this.resetForm();
      } else {
        // En caso de no llenar los elementos necesario despliega un mensaje de alerta
        this.showAlert('warning', 'Please fill the form');
      };
    }
    render() {
      return (
        <div className="container-requisiciones">
        <div className='container'>
          {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
            <div>
              {this.state.alertData.message}
            </div>
          </div>}
          <div className='container' style={{ padding: `40px 0px` }}>
            <div className="form-content">
                <h2>Por favor, contesta las siguientes preguntas</h2> 
            
                <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' >

                  <h4>Datos relevantes del puesto</h4>
                  <div className="form-content">
                    <label htmlFor='name'>Nombre del puesto</label>
                    <input className="requisition-form"type='text'  id='name' 
                      placeholder='Nombre' ref={name => this.inputName = name} />
                  </div>

                  <div>
                    <label htmlFor='department'>Departamento</label>
                    <input className="requisition-form" type='text'  id='department' 
                      placeholder='Área' ref={department => this.inputDepartment = department} />
                  </div>

                  <div>
                    <label htmlFor='area'>Jefe de área</label>
                    <input className="requisition-form" type='text'  id='area' 
                      placeholder='Encargado del área' ref={area => this.inputArea = area} />
                  </div>

                  <div >
                    <label htmlFor='contract'>Tipo de contrato</label>
                    <select className="requisition-form"  id='contract' ref={contract => this.inputContract = contract}>
                      <option value='Definido'>Definido</option>
                      <option value='Indefinico'>Indefinido</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor='number'>Número de vacantes</label>
                    <input className="requisition-form" type='number'  id='number' 
                      placeholder='Número de vacantes' ref={number => this.inputNumber = number}/>
                  </div>

                  <div >
                    <label htmlFor='job'>Tipo de puesto</label>
                    <select className="requisition-form"  id='job' ref={job => this.inputJob = job}>
                      <option value='Nuevo'>Nuevo</option>
                      <option value='Remplazo'>Remplazo</option>
                    </select>
                  </div>

                  {/* <div>
                    <label htmlFor='replacement'>Remplaza a:</label>
                    <input className="requisition-form" type='text'  id='replacement' 
                      placeholder='Nombre' ref={replacement => this.inputReplacement = replacement} />
                  </div> */}

                  <h4>Requisitos que debe cubrir</h4>
                  <div>
                    <label htmlFor='scholarship'>Escolaridad</label>
                    <input className="requisition-form" type='text'  id='scholarship' 
                      placeholder='Escolaridad' ref={scholarship => this.inputScholarship = scholarship} />
                  </div>

                  <div >
                    <label htmlFor='language'>Idioma</label>
                    <select className="requisition-form"  id='language' ref={language => this.inputLanguage = language}>
                      <option value='Español'>Español</option>
                      <option value='Ingles'>Inglés</option>
                      <option value='Otro'>Otro</option>
                    </select>
                  </div>

                  <div >
                    <label htmlFor='travel'>Disponivilidad para viajar</label>
                    <select className="requisition-form"  id='travel' ref={travel => this.inputTravel = travel}>
                      <option value='Si'>Si</option>
                      <option value='No'>No</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor='experience'>Experiencia</label>
                    <input className="requisition-form" type='text'  id='experience' 
                      placeholder='Experiencia' ref={experience => this.inputExperience = experience} />
                  </div>

                  {/* <h4>Condiciones de trabajo</h4>
                  <div>
                    <label htmlFor='place'>Lugar de trabajo</label>
                    <input className="requisition-form" type='text'  id=' place' 
                      placeholder='Lugar' ref={ place => this.inputPlace =  place} />
                  </div>

                  <div>
                    <label htmlFor='workingHours'>Horario</label>
                    <input className="requisition-form" type='text'  id='workingHours' 
                      placeholder='Hora' ref={ workingHours => this.inputWorkingHours =  workingHours} />
                  </div>

                  <div>
                    <label htmlFor='salary'>Sueldo</label>
                    <input className="requisition-form" type='text'  id='salary' 
                      placeholder='Cantidad' ref={salary => this.inputSalary = salary} />
                  </div> */}

                  {/* <h4>Aprobación</h4>
                  <div >
                    <label htmlFor='approved'>La requisición es:</label>
                    <select  id='approved' ref={approved => this.inputApproved = approved}>
                      <option value='Aprobada'>Aprobada</option>
                      <option value='Rechazada'>Rechazada</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor='message'>Comentarios</label>
                    <textarea className='form-control' id='message' 
                      rows='3' ref={message => this.textAreaMessage = message}>
                    </textarea>
                  </div>  */}

                  <button type='submit' id="send-button">Send</button>
                </form>
            </div>
          </div>
        </div>
      </div>        

      );
    }
  }
  export default Requisicion;