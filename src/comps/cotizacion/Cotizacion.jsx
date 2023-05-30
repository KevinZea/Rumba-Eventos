import React from 'react'
import './Cotizacion.css'
export default function Cotizacion() {
    return (
        <form class="row g-3" id='formulario' action="https://formsubmit.co/correorumbaeventos@gmail.com" method="POST">
            <h1>Cotizar</h1>
            <div class="col-md-4">
                <label for="validationTooltip" class="form-label">Nombre:</label>
                <input type="text" class="form-control is-valid" id="validationServer01"
                    placeholder='Mark'
                    name='nombre'
                    required />
                <div class="valid-feedback">
                    Nombre Valido!
                </div>
            </div>
            <br />
            <div class="col-md-4">
                <label for="validationServer03" class="form-label">Telefono:</label>
                <input type="number" class="form-control is-invalid"
                    id="validationServer03"
                    aria-describedby="validationServer03Feedback"
                    placeholder='3000000000'
                    name='telefono'
                    required />
                <div id="validationServer03Feedback" class="invalid-feedback">
                    Por favor ingrese un telefono valido.
                </div>
            </div>
            <br />
            <div class="col-md-4">
                <label for="validationServerUsername" class="form-label">Fecha:</label>
                <div class="input-group has-validation">
                    <input type="date" class="form-control is-invalid"
                        id="validationServerUsername"
                        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                        placeholder='¿Para que día será?'
                        name='fecha'
                        required />
                    <div id="validationServerUsernameFeedback" class="invalid-feedback">
                        Por favor coloca una fecha valida
                    </div>
                </div>
            </div>
            <br />
            <div class="col-md-4">
                <label for="validationServer03" class="form-label">Horario</label>
                <input type="text" class="form-control is-invalid"
                    id="validationServer03"
                    aria-describedby="validationServer03Feedback"
                    placeholder='1pm - 5pm'
                    name='horario'
                    required />
                <div id="validationServer03Feedback" class="invalid-feedback">
                    Por favor escriba un horario valido:
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationServer03" class="form-label">Cantidad de personas</label>
                <input type="number" class="form-control is-invalid"
                    id="validationServer03"
                    aria-describedby="validationServer03Feedback"
                    placeholder='100'
                    name='cantidad de personas:'
                    required />
                <div id="validationServer03Feedback" class="invalid-feedback">
                    Por favor escriba la cantidad de personas aproximadas en
                    el evento:
                </div>
            </div>
            <br />
            <div class="col-md-4">
                <label for="validationServer03" class="form-label">Ocasión</label>
                <input type="text" class="form-control is-invalid"
                    id="validationServer03"
                    aria-describedby="validationServer03Feedback"
                    placeholder='matrimonio'
                    name='ocasion'
                    required />
                <div id="validationServer03Feedback" class="invalid-feedback">
                    Por favor escriba que tipo de ocasión sera:
                </div>
            </div>
            <br />
            <div class="col-md-4">
                <label for="validationServer03" class="form-label">Servicio(s) a cotizar:</label>
                <input type="text" class="form-control is-invalid"
                    id="validationServer03"
                    aria-describedby="validationServer03Feedback"
                    placeholder='Alquiler de sonido'
                    name='servicio'
                    required />
                <div id="validationServer03Feedback" class="invalid-feedback">
                    Por favor escriba que tipo de ocasión sera:
                </div>
            </div>

            <div class="col-12">
                <button class="btn btn-primary" type="submit">Enviar Cotización</button>
            </div>
            <input type="hidden" name="_next" value={window.location}/>
            <input type="hidden" name="_captcha" value={"false"}/>
        </form>
    )
}
