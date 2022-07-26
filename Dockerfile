FROM ubuntu:22.04

RUN git clone https://github.com/emscripten-core/emsdk.git && cd emsdk
RUN ./emsdk install latest
RUN ./emsdk activate latest
RUN source ./emsdk_env.sh && cd ..