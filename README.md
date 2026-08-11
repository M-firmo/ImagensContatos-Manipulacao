# DeviceResourcesApp

Aplicação em React Native (Expo) que demonstra o acesso a recursos nativos do dispositivo móvel: **galeria de imagens** e **lista de contatos**.

## 📋 Funcionalidades

- **Galeria de Imagens**: Solicita permissão, abre a galeria do dispositivo e exibe a imagem selecionada na tela.
- **Lista de Contatos**: Solicita permissão, carrega os contatos do dispositivo e exibe em uma lista otimizada com nomes, telefones e e-mails.
- **Tratamento de Permissões**: Exibe alertas informativos caso o usuário recuse as permissões solicitadas.

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) - Framework para desenvolvimento mobile
- [Expo](https://expo.dev/) - Plataforma para simplificar o desenvolvimento React Native
- [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/) - Acesso à galeria de imagens
- [expo-contacts](https://docs.expo.dev/versions/latest/sdk/contacts/) - Acesso à lista de contatos
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) - Ícones vetoriais (FontAwesome)

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) instalado no dispositivo móvel (Android ou iOS)

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/ImagensContatos-Manipulacao.git
   cd ImagensContatos-Manipulacao/DeviceResourcesApp
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npx expo start
   ```

4. **Execute no dispositivo:**
   - Escaneie o QR Code com o aplicativo **Expo Go** (Android) ou com a **Câmera** (iOS).

## 📁 Estrutura do Projeto

```
DeviceResourcesApp/
├── App.js                              # Componente principal
├── components/
│   ├── ImagePickerComponent.js         # Componente de seleção de imagem
│   └── ContactsComponent.js           # Componente de lista de contatos
├── app.json                            # Configurações e permissões do Expo
├── package.json                        # Dependências do projeto
└── assets/                             # Ícones e splash screen
```

## ⚙️ Permissões Configuradas

### Android (`app.json`)
- `READ_CONTACTS` / `WRITE_CONTACTS` - Acesso aos contatos
- `READ_EXTERNAL_STORAGE` / `WRITE_EXTERNAL_STORAGE` - Acesso à galeria

### iOS (`app.json` > `infoPlist`)
- `NSPhotoLibraryUsageDescription` - Permissão para galeria de fotos
- `NSContactsUsageDescription` - Permissão para contatos
