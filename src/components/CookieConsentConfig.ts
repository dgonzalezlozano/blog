import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/es/" target="_blank">Google Analytics 4</a>',
          onAccept: () => {
            var script = document.createElement('script');
            script.src = "https://www.googletagmanager.com/gtag/js?id=G-VRBR7DX5E5";
            script.async = true;
            document.head.appendChild(script);

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-VRBR7DX5E5');
          },
          onReject: () => {
            
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
      },
    },
  },
  language: {
    default: 'es',
    autoDetect: 'browser',
    translations: {
      es: {
        consentModal: {
          title: "¡Hola! ¡es hora de las cookies! 🍪",
          description:
            'Las cookies de este sitio web se usan para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. Además, compartimos información sobre el uso que haga del sitio web con nuestros partners de redes sociales, publicidad y análisis web, quienes pueden combinarla con otra información que les haya proporcionado o que hayan recopilado a partir del uso que haya hecho de sus servicios.',
          acceptAllBtn: 'Aceptar todas',
          acceptNecessaryBtn: 'Rechazar todas',
          showPreferencesBtn: 'Gestionar preferencias',
          footer:
            '<a href="#link">Politica de privacidad</a>\n<a href="#link">Terminos y condiciones</a>',
        },
        preferencesModal: {
          title: 'Preferencias de consentimiento',
          acceptAllBtn: 'Aceptar todas',
          acceptNecessaryBtn: 'Rechazar todas',
          savePreferencesBtn: 'Guardar preferencias',
          closeIconLabel: 'Cerrar modal',
          serviceCounterLabel: 'Servicio|Servicios',
          sections: [
            {
              title: 'Uso de Cookies',
              description:
                'Las cookies de este sitio web se usan para personalizar el contenido y los anuncios, ofrecer funciones de redes sociales y analizar el tráfico. Además, compartimos información sobre el uso que haga del sitio web con nuestros partners de redes sociales, publicidad y análisis web, quienes pueden combinarla con otra información que les haya proporcionado o que hayan recopilado a partir del uso que haya hecho de sus servicios.',
            },
            {
              title:
                'Cookies estrictamente necesarias <span class="pm__badge">Siempre activado</span>',
              description:
                'Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Usualmente están configuradas para responder a acciones hechas por usted para recibir servicios, tales como ajustar sus preferencias de privacidad, iniciar sesión en el sitio, o llenar formularios. Usted puede configurar su navegador para bloquear o alertar la presencia de estas cookies, pero algunas partes del sitio web no funcionarán. Estas cookies no guardan ninguna información personal identificable.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies funcionales',
              description:
                'Estas cookies permiten que el sitio ofrezca una mejor funcionalidad y personalización. Pueden ser establecidas por nosotros o por terceras partes cuyos servicios hemos agregado a nuestras páginas. Si no permite estas cookies algunos de nuestros servicios no funcionarán correctamente.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Cookies analiticas',
              description:
                'Estas cookies nos permiten contar las visitas y fuentes de circulación para poder medir y mejorar el desempeño de nuestro sitio. Nos ayudan a saber qué páginas son las más o menos populares, y ver cuántas personas visitan el sitio. Toda la información que recogen estas cookies es agregada y, por lo tanto, anónima. Si no permite estas cookies no sabremos cuándo visitó nuestro sitio, y por lo tanto no podremos saber cuándo lo visitó.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Más información',
              description:
                'Para cualquier consulta relacionada con mi política de cookies y tus opciones, por favor <a class="cc__link" href="#yourdomain.com">contáctame</a>.',
            },
          ],
        },
      },
    },
  },
};
