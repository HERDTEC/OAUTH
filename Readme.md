# OAUTH
JSON Web Tokens
Estandar de autenticacion

OAuth2.0
Estandar de autorizacion

OpenID Connect
Segunda version de OAUTH2.0


## Autenticacion
Identificar la entidad de una persona 


### Mecanismos de autenticación

1. Usuario y Contraseña
2. Huellas
3. Mensaje de Texto

## Autorizacion
Identificar la entidad de una persona 

Permitir a un usuario acceso limitado a nuestros recursos

### JSON Web Tokens
Estandar que sirve para representar permisos entre dos partes.

* Una parte gerera un token y le concede unas peticiones.

* Otra parte usa token para realizar peticiones sin que la primera parte pueda preocuparse de verificar.

#### Partes del Token
* Header
  - Tipo de algoritmo para codificar
  - Tipo de token
* Payload
  - Para quien es el token
  - Usuario
  - Cuando fue creado el token
  - Cuando expira el token
  - Claims  
    + (Registrados)[https://tools.ietf.org/html/rfc7519#section-4.1]
    + (Publicos)[https://www.iana.org/assignments/jwt/jwt.xhtml]
    + Privados
* Signature


