# Louvor Cordeiro v4.2 — Notificações

## Aplicativo
- Botão **Ativar notificações** em Configurações.
- Cada celular recebe um token próprio, mesmo usando o mesmo usuário compartilhado.
- Notificações em primeiro plano por atualizações da auditoria.
- `firebase-messaging-sw.js` preparado para notificações em segundo plano.
- Chave VAPID configurada.

## Envio automático com o app fechado
A pasta `firebase-functions` contém a função `notifyLouvorUpdate`, que dispara notificações quando um registro é criado em `churches/ibc/audit`.

O GitHub Pages publica apenas o aplicativo. A função precisa ser implantada no Firebase separadamente.
