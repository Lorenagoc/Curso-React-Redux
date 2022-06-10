![Udemy](https://img.shields.io/badge/Udemy-A435F0?style=for-the-badge&logo=Udemy&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
# Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!
Repositório dedicado aos projetos do Curso de React + Redux do professor Leonardo Moura Leitao.

### Erro com mongo:
```I STORAGE  [initandlisten] exception in initAndListen: NonExistentPath: Data directory /data/db not found., terminating```

#### Solução:

Criar o diretório ```/data/db/``` na raíz:
```sudo mkdir -p /data/db/```

Mudar a permissão do diretório:
```sudo chown `id -u` /data/db```
