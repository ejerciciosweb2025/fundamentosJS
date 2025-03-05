# Instalar node para probar los test con Jest
Windows: ok instalador ;-)

Gnu Linux nvm 
1 - instalador node
2 - https://github.com/nvm-sh/nvm
    * curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
    * export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    * nvm install --lts
3 - docker node


Creamos estructura de node para usar package.json y configurarlo
1 - npm init o npm init y

2 - En el package.json añadir, con "test": "jest"  ya iria... :

"scripts": {
    "test": "jest --watchAll",
    "coverage":"jest --coverage"
  },


3 - npm install 
