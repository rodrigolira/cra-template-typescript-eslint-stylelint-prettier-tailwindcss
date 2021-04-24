#!bin/bash

openssl req \
    -newkey rsa:2048 \
    -x509 \
    -nodes \
    -keyout development_certificate.key \
    -new \
    -out development_certificate.crt \
    -config ./development_certificate.cnf \
    -sha256 \
    -days 7300
