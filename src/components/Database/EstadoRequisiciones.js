import React, {Component} from 'react';




class EstadoRequisiciones extends Component {
   render (){
       return(
           <div className="conteiner-requisiciones">
               <div className="aprobadas">
               <h2>Requisiciones aprobadas</h2>

               <table class="tabla">
                    <tr>
                        <th>Folio</th>
                        <th>Nombre de la vacante</th>
                        <th>Estado</th>
                        <th>Comentario</th>
                    </tr>

                    <tr>
                        <td>LvB9it8WvyJeci37QI7</td>
                        <td>Ventas</td>
                        <td>Aprobado</td>
                        <td>De reemplazo</td>
                    </tr>

                    <tr>
                        <td>LvBdatT6QKlhxdy4kYW</td>
                        <td>Limpieza</td>
                        <td>Aprobado</td>
                        <td>De reemplazo</td>

                    </tr>

                    <tr>
                        <td>LvAau8sIH7OezcOtXkM</td>
                        <td>Operaciones</td>
                        <td>Aprobado</td>
                        <td>Se ampliarón plazas</td>
                    </tr>

                    <tr>
                        <td>LvA0TcA_lEbbhJyJD3B</td>
                        <td>Chofer</td>
                        <td>Aprobado</td>
                        <td>Remplazo</td>
                    </tr>

                    </table>
                </div>

                <div className="tabla2">
                    <h2>Requisiciones rechazadas</h2>

                    <table class="tabla">
                        <tr>
                            <th>Folio</th>
                            <th>Nombre de la vacante</th>
                            <th>Estado</th>
                            <th>Comentario</th>
                        </tr>

                        <tr>
                            <td>Lv9uPv4GK9o1CPH_YjD</td>
                            <td>Sistemas</td>
                            <td>Rechazado</td>
                            <td>No cubre ninguna vacante</td>
                        </tr>

                        <tr>
                            <td>Lv9Z5QoMaUZ0Q2GxNwg</td>
                            <td>Atención a clientes</td>
                            <td>Rechazado</td>
                            <td>Excedio el limite </td>
                        </tr>

                        <tr>
                            <td>Lv9Y3wN1kErDEml6F5J</td>
                            <td>Jefe de Ventas</td>
                            <td>Rechazado</td>
                            <td>No cumple los requisitos</td>
                        </tr>
                    </table>
                </div>

                <div className="tabla3">
                  <h2>Requisiciones Pendientes</h2>

                    <table class="tabla">
                        <tr>
                            <th>Folio</th>
                            <th>Nombre de la vacante</th>
                            <th>Estado</th>
                            <th>Comentario</th>
                        </tr>

                        <tr>
                            <td>-Lv9FoaLATM8S3evWLpB</td>
                            <td>Secretaria</td>
                            <td>-----</td>
                            <td>-----</td>
                        </tr>

                        <tr>
                            <td>Lv9SyMp86mPG3Hpi_Ke</td>
                            <td>Recepcionista</td>
                            <td>------</td>
                            <td>------</td>

                        </tr>
                    </table>
                </div>

           </div>
       )
   }

}
export default EstadoRequisiciones;