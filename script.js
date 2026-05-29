'use strict';

const LegalApp = {
    // Variable para memorizar la ventana que se encuentra activa
    currentCategory: null,
    isFormMode: false, // Para saber si estamos en modo formulario

    // Contenido de las guías para cada categoría (incluyendo Instagram)
    guides: {
        'accidente-transito': {
            title: 'Accidente de Tránsito',
            content: `
                <h3>¿Qué hacer después de un accidente de tránsito?</h3>
                <p>Si has sufrido un accidente vehicular, es importante actuar rápidamente. Aquí te brindamos una guía para proteger tus derechos:</p>
                
                <h3>Pasos inmediatos:</h3>
                <ul>
                    <li><strong>Seguridad primero:</strong> Verifica que todos estén seguros. Si hay lesionados, llama a emergencias.</li>
                    <li><strong>Llamar a la policía:</strong> Reporta el accidente y obtén el número de denuncia.</li>
                    <li><strong>Documentación:</strong> Recolecta nombres, teléfonos e información de seguros de todos los involucrados.</li>
                    <li><strong>Fotos:</strong> Documenta el estado de los vehículos y la escena del accidente.</li>
                    <li><strong>Testigos:</strong> Identifica y registra datos de personas que presenciaron el accidente.</li>
                </ul>
                
                <h3>Después del accidente:</h3>
                <ul>
                    <li>Notifica a tu aseguradora dentro de los plazos establecidos.</li>
                    <li>Solicita un informe médico si sufriste lesiones.</li>
                    <li>Conserva todos los documentos (recibos, facturas de reparaciones, etc.).</li>
                    <li>Consulta con un abogado para reclamar daños y perjuicios si corresponde.</li>
                </ul>
                
                <h3>Reclamaciones:</h3>
                <p>Tienes derecho a reclamar por:</p>
                <ul>
                    <li>Daños al vehículo</li>
                    <li>Lesiones personales</li>
                    <li>Pérdida de ingresos por incapacidad</li>
                    <li>Gastos médicos y de rehabilitación</li>
                </ul>
            `
        },
        'accidente-laboral': {
            title: 'Accidente Laboral',
            content: `
                <h3>¿Sufriste un accidente en el trabajo?</h3>
                <p>Los accidentes laborales están cubiertos por la legislación de riesgos del trabajo. Conoce tus derechos:</p>
                
                <h3>Debes hacer lo siguiente:</h3>
                <ul>
                    <li><strong>Informar inmediatamente:</strong> Comunica al empleador sobre el accidente.</li>
                    <li><strong>Registro:</strong> Solicita que se documenten los detalles del accidente.</li>
                    <li><strong>Atención médica:</strong> Acude a un médico y conserva los comprobantes.</li>
                    <li><strong>Documentación:</strong> Obtén una copia del acta del accidente.</li>
                    <li><strong>Testigos:</strong> Identifica compañeros que presenciaron el hecho.</li>
                </ul>
                
                <h3>Tus derechos:</h3>
                <ul>
                    <li>Cobertura médica completa</li>
                    <li>Rehabilitación y recuperación</li>
                    <li>Subsidio por incapacidad temporal</li>
                    <li>Indemnización si hay consecuencias permanentes</li>
                    <li>Protección contra despidos discriminatorios</li>
                </ul>
                
                <h3>Próximos pasos:</h3>
                <p>Contacta a nuestro estudio para tramitar tu reclamo ante la aseguradora y obtener la compensación que mereces.</p>
            `
        },
        'despido-laboral': {
            title: 'Despido Laboral',
            content: `
                <h3>¿Fuiste despedido?</h3>
                <p>Tienes derechos que protegen tu empleabilidad. Aquí te explicamos cómo proceder:</p>
                
                <h3>Primeros pasos:</h3>
                <ul>
                    <li><strong>Solicita por escrito:</strong> Pide al empleador que justifique el despido por escrito.</li>
                    <li><strong>Conserva documentos:</strong> Guarda todas las comunicaciones y comprobantes.</li>
                    <li><strong>Consulta inmediatamente:</strong> Contacta a un abogado laboralista para asesorarte.</li>
                </ul>
                
                <h3>Tipos de despido:</h3>
                <ul>
                    <li><strong>Justificado:</strong> Con causa demostrable (incumplimiento grave, conducta, etc.)</li>
                    <li><strong>Injustificado:</strong> Sin causa o sin cumplir procedimientos legales</li>
                    <li><strong>Nulidad:</strong> Por discriminación, represalias o causas vedadas</li>
                </ul>
                
                <h3>Compensaciones a las que tienes derecho:</h3>
                <ul>
                    <li>Preaviso (o pago del preaviso)</li>
                    <li>Indemnización por antigüedad</li>
                    <li>Indemnización por falta de justa causa</li>
                    <li>Recuperación del empleo (en casos de nulidad)</li>
                </ul>
            `
        },
        'cuota-alimentaria': {
            title: 'Cuota Alimentaria',
            content: `
                <h3>Consultas sobre Cuota Alimentaria</h3>
                <p>La cuota alimentaria garantiza el sustento de hijos menores de edad. Asesoría en todos los aspectos:</p>
                
                <h3>¿Quién tiene derecho?</h3>
                <ul>
                    <li>Hijos menores de edad</li>
                    <li>Hijos mayores de edad en ciertos casos (estudiantes, incapaces)</li>
                    <li>Cónyuge o ex cónyuge en situación de necesidad</li>
                </ul>
                
                <h3>¿Cómo se calcula?</h3>
                <ul>
                    <li>Porcentaje de los ingresos del obligado</li>
                    <li>Cantidad de hijos a cargo</li>
                    <li>Necesidades del hijo</li>
                    <li>Capacidad económica de ambos padres</li>
                </ul>
                
                <h3>Trámites:</h3>
                <ul>
                    <li><strong>Acuerdo voluntario:</strong> Ambos padres acuerdan la cuota</li>
                    <li><strong>Demanda judicial:</strong> Si no hay acuerdo, se inicia juicio</li>
                    <li><strong>Modificación:</strong> Cambios en la cuota por cambios económicos</li>
                    <li><strong>Cese o aumento:</strong> Según nuevas circunstancias</li>
                </ul>
                
                <h3>Obligaciones del deudor:</h3>
                <p>Pago puntual y completo de la cuota establecida. El incumplimiento puede resultar en sanciones legales.</p>
            `
        },
        'cumplimiento-contrato': {
            title: 'Cumplimiento de Contrato',
            content: `
                <h3>Incumplimiento de Contrato</h3>
                <p>¿Existe un incumplimiento contractual? Te asesoramos sobre tus opciones legales:</p>
                
                <h3>Antes de litigar:</h3>
                <ul>
                    <li>Verifica los términos exactos del contrato.</li>
                    <li>Documenta toda comunicación con la otra parte.</li>
                    <li>Notifica formalmente sobre el incumplimiento.</li>
                    <li>Intenta resolver mediante diálogo.</li>
                    <li>Considera mediación o arbitraje.</li>
                </ul>
                
                <h3>Opciones legales:</h3>
                <ul>
                    <li><strong>Cumplimiento forzado:</strong> Obligar el cumplimiento del contrato</li>
                    <li><strong>Resolución del contrato:</strong> Darlo por terminado</li>
                    <li><strong>Indemnización por daños:</strong> Reclamar compensación</li>
                    <li><strong>Cláusula penal:</strong> Si está estipulada en el contrato</li>
                </ul>
                
                <h3>Documentación necesaria:</h3>
                <ul>
                    <li>Copia del contrato firmado</li>
                    <li>Comunicaciones entre partes</li>
                    <li>Comprobantes de pago o cumplimiento</li>
                    <li>Evidencia del incumplimiento</li>
                </ul>
                
                <h3>Plazos de prescripción:</h3>
                <p>Consulta con nuestro equipo sobre los plazos aplicables a tu caso específico para evitar que prescriba tu derecho.</p>
            `
        },
        'sucesiones': {
            title: 'Sucesiones y Herencias',
            content: `
                <h3>Asesoría en Sucesiones</h3>
                <p>Gestión integral de procesos sucesorios y trámites de herencias:</p>
                
                <h3>¿Qué es una sucesión?</h3>
                <p>Es el proceso legal de distribución de los bienes de una persona fallecida entre sus herederos.</p>
                
                <h3>Tipos de sucesión:</h3>
                <ul>
                    <li><strong>Testamentaria:</strong> El fallecido dejó testamento</li>
                    <li><strong>Intestada:</strong> No hay testamento, sucede por ley</li>
                    <li><strong>Mixta:</strong> Combinación de ambas</li>
                </ul>
                
                <h3>Pasos en un proceso sucesorio:</h3>
                <ul>
                    <li>Presentación de la declaratoria de herederos (si corresponde)</li>
                    <li>Inventario y tasación de bienes</li>
                    <li>Pago de deudas y obligaciones</li>
                    <li>Distribución de la herencia</li>
                    <li>Transferencia de bienes inmuebles</li>
                </ul>
                
                <h3>Herederos con derecho:</h3>
                <ul>
                    <li>Cónyuge</li>
                    <li>Hijos (legítimos y adoptados)</li>
                    <li>Padres o ascendientes</li>
                    <li>Hermanos y colaterales (en ciertos órdenes)</li>
                </ul>
                
                <h3>Documentos necesarios:</h3>
                <ul>
                    <li>Certificado de defunción</li>
                    <li>Testamento (si existe)</li>
                    <li>Documentos de identificación de herederos</li>
                    <li>Documentos de los bienes (escrituras, certificados, etc.)</li>
                </ul>
            `
        },
        'instagram': {
            title: 'Nuestro Feed de Instagram',
            content: `
                <div style="width: 100%; height: 400px; overflow-y: auto; border-radius: 8px; background: #f9f9f9; text-align: center;">
                    <iframe src="https://www.instagram.com/p/DY0s4bIG0qc/embed" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%;"></iframe>
                </div>
                
                <div style="text-align: center; margin-top: 15px;">
                    <a href="https://www.instagram.com/matiasferreyralopez/" target="_blank" rel="noopener noreferrer" style="color: #c13584; font-weight: bold; text-decoration: none; font-size: 14px;">
                        <i class="fab fa-instagram"></i> Abrir aplicación de Instagram
                    </a>
                </div>
            `
        }
    },

    init: function() {
        const modal = document.getElementById('modal');
        const modalOverlay = document.getElementById('modalOverlay');
        
        if (modal) {
            modal.classList.remove('active');
            modal.style.display = ''; 
        }
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            modalOverlay.style.display = '';
        }

        this.setupCategoryCards();
        this.setupModal();
        this.setupSocialButtons(); 
        this.preventPinchZoom();
        this.optimizeForTouchDevices();
    },

    setupCategoryCards: function() {
        const cards = document.querySelectorAll('.category-card');
        cards.forEach(card => {
            card.addEventListener('click', (e) => this.handleCardClick(e));
            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleCardClick(e);
                }
            });
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
        });
    },

    handleCardClick: function(e) {
        const card = e.currentTarget;
        const category = card.getAttribute('data-category');
        this.openModal(category);
    },

    setupSocialButtons: function() {
        const instagramBtn = document.querySelector('.social-icon.instagram');
        if (instagramBtn) {
            instagramBtn.addEventListener('click', (e) => {
                e.preventDefault(); 
                this.openModal('instagram'); 
            });
        }
    },

    openModal: function(category) {
        this.currentCategory = category;
        this.isFormMode = false;

        const guide = this.guides[category];
        if (!guide) return;

        const modal = document.getElementById('modal');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        const modalFooter = document.querySelector('.modal-footer'); 

        modalTitle.textContent = guide.title;
        modalContent.innerHTML = guide.content;

        if (category === 'instagram') {
            modalFooter.style.display = 'none';
        } else {
            modalFooter.style.display = 'flex';
            modalFooter.innerHTML = `
                <button class="btn btn-contact">
                    <i class="fas fa-whatsapp"></i>
                    <span>Contactar al Estudio</span>
                </button>
            `;
            
            const contactBtn = modalFooter.querySelector('.btn-contact');
            if (contactBtn) {
                contactBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleContact();
                });
            }
        }

        modal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    closeModal: function() {
        const modal = document.getElementById('modal');
        const modalOverlay = document.getElementById('modalOverlay');

        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        this.currentCategory = null;
        this.isFormMode = false;
    },

    setupModal: function() {
        const self = this;
        const modalClose = document.getElementById('modalClose');
        const modalOverlay = document.getElementById('modalOverlay');

        if (modalClose) {
            modalClose.addEventListener('click', function(e) {
                e.preventDefault();
                self.closeModal();
            });
        }

        if (modalOverlay) {
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    self.closeModal();
                }
            });
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                self.closeModal();
            }
        });
    },

    handleContact: function() {
        const numeroWhatsApp = "5493512007218";
        
        if (window.innerWidth > 1024) {
            this.showDesktopContact(numeroWhatsApp);
        } else {
            this.showMobileContactForm(numeroWhatsApp);
        }
    },

    showMobileContactForm: function(numeroWhatsApp) {
        const self = this;
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        const modalFooter = document.querySelector('.modal-footer');
        
        modalTitle.textContent = 'Formulario de Contacto';
        
        const formHTML = `
            <div class="contact-form-inline">
                <p class="form-warning-message">
                    <i class="fas fa-exclamation-circle"></i> El siguiente formulario se enviará mediante un mensaje de WhatsApp.
                </p>
                <form id="contactForm">
                    <div class="form-group">
                        <label for="clientName">Nombre <span class="required">*</span></label>
                        <input 
                            type="text" 
                            id="clientName" 
                            name="clientName" 
                            placeholder="Tu nombre y apellido" 
                            maxlength="100"
                            required
                        >
                    </div>
                    
                    <div class="form-group">
                        <label for="problemDescription">Descripción de mi caso <span class="required">*</span></label>
                        <textarea 
                            id="problemDescription" 
                            name="problemDescription" 
                            placeholder="Describe tu caso en máximo 350 caracteres..." 
                            maxlength="350"
                            rows="6"
                            required
                        ></textarea>
                        <div class="char-count">
                            <span id="charCount">0</span>/350 caracteres
                        </div>
                    </div>
                </form>
            </div>
        `;
        
        modalContent.innerHTML = formHTML;
        
        modalFooter.innerHTML = `
            <button type="button" class="btn btn-cancel" id="backToGuide">
                <i class="fas fa-arrow-left"></i>
                <span>Volver</span>
            </button>
            <button type="button" class="btn btn-direct-chat" id="directChatBtn">
                <i class="fab fa-whatsapp"></i>
                <span>Ir directo al chat</span>
            </button>
            <button type="button" class="btn btn-submit" id="submitForm">
                <i class="fab fa-whatsapp"></i>
                <span>Enviar Mensaje WhatsApp</span>
            </button>
        `;
        
        this.isFormMode = true;
        
        const textarea = document.getElementById('problemDescription');
        const charCount = document.getElementById('charCount');
        textarea.addEventListener('input', function() {
            charCount.textContent = this.value.length;
        });
        
        document.getElementById('backToGuide').addEventListener('click', (e) => {
            e.preventDefault();
            self.openModal(self.currentCategory);
        });
        
        document.getElementById('directChatBtn').addEventListener('click', (e) => {
            e.preventDefault();
            const mensajeBase = self.getMensajeBase();
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeBase)}`;
            self.closeModal();
            window.open(url, '_blank');
        });
        
        document.getElementById('submitForm').addEventListener('click', (e) => {
            e.preventDefault();
            const clientName = document.getElementById('clientName').value.trim();
            const problemDescription = document.getElementById('problemDescription').value.trim();
            
            if (!clientName || !problemDescription) {
                alert('Por favor completa todos los campos');
                return;
            }
            
            let mensajeBase = self.getMensajeBase();
            const mensajeFinal = `Hola. Mi nombre es ${clientName}. ${mensajeBase} Mi problema es el siguiente: ${problemDescription}`;
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeFinal)}`;
            
            self.closeModal();
            window.open(url, '_blank');
        });
    },

    // NUEVO DISEÑO DE BOTONES ADAPTADO AL FORMATO SOLICITADO
    showDesktopContact: function(numeroWhatsApp) {
        const self = this;
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        const modalFooter = document.querySelector('.modal-footer');
        
        modalTitle.textContent = 'Datos de contacto:';
        
        const desktopHTML = `
            <div class="desktop-contact-layout">
                <div class="desktop-contact-left">
                    <div class="qr-wrapper">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/${numeroWhatsApp}" alt="QR WhatsApp" class="qr-mock-img">
                    </div>
                    <p class="qr-instructions">Escanea el código QR y envía un mensaje de WhatsApp.</p>
                </div>
                
                <div class="desktop-vertical-divider"></div>
                
                <div class="desktop-contact-right">
                    <div class="info-block">
                        <div class="info-row">
                            <span class="info-label">WhatsApp:</span>
                            <span class="info-value">+5493512007218</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">Instagram:</span>
                            <span class="info-value">matiasferreyralopez</span>
                        </div>
                    </div>
                    
                    <div class="desktop-action-buttons">
                        <a href="https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(self.getMensajeBase())}" target="_blank" class="hero-btn-single desktop-modal-btn">
                            <div class="btn-single-icon">
                                <i class="fab fa-whatsapp"></i>
                            </div>
                            <div class="btn-single-content">
                                <span class="btn-single-title">Chat de WhatsApp</span>
                                <span class="btn-single-desc">Contacto directo e inmediato.</span>
                            </div>
                            <div class="btn-single-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </a>
                        
                        <a href="https://www.instagram.com/matiasferreyralopez/" target="_blank" class="instagram-footer-btn desktop-modal-btn">
                            <div class="insta-footer-icon">
                                <i class="fab fa-instagram"></i>
                            </div>
                            <div class="insta-footer-content">
                                <span class="insta-footer-title">Instagram</span>
                                <span class="insta-footer-desc">Novedades y nuestra actividad diaria.</span>
                            </div>
                            <div class="insta-footer-arrow">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        modalContent.innerHTML = desktopHTML;
        
        modalFooter.innerHTML = `
            <button type="button" class="btn btn-cancel" id="backToGuide">
                <i class="fas fa-arrow-left"></i>
                <span>Volver</span>
            </button>
        `;
        
        this.isFormMode = true;
        
        document.getElementById('backToGuide').addEventListener('click', (e) => {
            e.preventDefault();
            self.openModal(self.currentCategory);
        });
    },

    getMensajeBase: function() {
        switch(this.currentCategory) {
            case 'accidente-transito':
                return "Sufrí un accidente de tránsito y necesito asesoramiento legal para reclamar.";
            case 'accidente-laboral':
                return "Sufrí un accidente de trabajo (o tengo un problema con la ART) y necesito asesorarme sobre mis derechos.";
            case 'despido-laboral':
                return "Fui despedido/a recientemente y me gustaría que revisen mi caso y liquidación.";
            case 'cuota-alimentaria':
                return "Necesito hacerles una consulta relacionada con un tema de cuota alimentaria.";
            case 'cumplimiento-contrato':
                return "Me comunico por un problema de incumplimiento de contrato y necesito saber mis opciones legales.";
            case 'sucesiones':
                return "Me comunico para hacer una consulta sobre un trámite de sucesión/herencia.";
            case 'instagram':
                return "Vi su perfil de Instagram desde la web y me gustaría hacerles una consulta legal.";
            default:
                return "Me comunico desde la página web del estudio. Me gustaría hacer una consulta.";
        }
    },

    preventPinchZoom: function() {
        document.addEventListener('touchmove', function(e) {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });
    },

    optimizeForTouchDevices: function() {
        const isTouchDevice = () => {
            return (('ontouchstart' in window) ||
                    (navigator.maxTouchPoints > 0) ||
                    (navigator.msMaxTouchPoints > 0));
        };

        if (isTouchDevice()) {
            document.body.classList.add('touch-device');
        }
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => LegalApp.init());
} else {
    LegalApp.init();
}

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (isIOS) {
    document.body.classList.add('is-ios');
}

const isAndroid = /Android/.test(navigator.userAgent);
if (isAndroid) {
    document.body.classList.add('is-android');
}