Игра в карты найди пару

Три уровня сложности 3, 6 и 9 пар карт

Стеки используемых технологий:
Тайпскрипт, JS, webpack, eslint

Чтоб запустить этот проект на своем компе нужно со слезами на глазах установить кучу всего что перечислено ниже:

{
    "name": "card-game",
    "version": "1.0.0",
    "description": "",
    "main": "index.ts",
    "scripts": {
        "test": "jest",
        "format": "prettier --write ./src/",
        "formatwebconf": "npx prettier --write webpack.config.ts",
        "lint:js": "eslint ./src/**/*.ts",
        "lint:css": "stylelint ./src/**/*.css",
        "lint:ts": "tsc --noEmit",
        "lint": "npm run lint:js && npm run lint:css && npm run lint:ts && npm run test",
        "build": "cross-env NODE_ENV=production webpack",
        "start": "webpack-dev-server --open",
        "prepare": "husky install"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@typescript-eslint/eslint-plugin": "^6.4.1",
        "@typescript-eslint/parser": "^6.4.1",
        "copy-webpack-plugin": "^11.0.0",
        "cross-env": "^7.0.3",
        "css-loader": "^6.8.1",
        "css-minimizer-webpack-plugin": "^5.0.1",
        "eslint": "^8.46.0",
        "eslint-config-prettier": "^9.0.0",
        "eslint-plugin-import": "^2.28.1",
        "eslint-plugin-jsx-a11y": "^6.7.1",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-prettier": "^5.0.0",
        "eslint-plugin-react": "^7.33.2",
        "html-webpack-plugin": "^5.5.3",
        "husky": "^8.0.3",
        "jest": "^29.6.4",
        "mini-css-extract-plugin": "^2.7.6",
        "prettier": "^3.0.1",
        "stylelint": "^15.10.2",
        "stylelint-config-standard": "^34.0.0",
        "stylelint-prettier": "^4.0.2",
        "ts-loader": "^9.4.4",
        "typescript": "^5.1.6",
        "webpack": "^5.88.2",
        "webpack-cli": "^5.1.4",
        "webpack-dev-server": "^4.15.1"
    },
    "dependencies": {
        "@babel/preset-env": "^7.22.10",
        "babel-jest": "^29.6.4",
        "ts-jest": "^29.1.1"
    }
}
