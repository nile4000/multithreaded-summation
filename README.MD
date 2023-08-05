# Multi-Threaded Summation in Node.js

Dieses Projekt demonstriert die Verwendung von Worker-Threads in Node.js, um eine umfangreiche Berechnungsaufgabe - die Summation einer Reihe von Zahlen - auf mehrere Kerne zu verteilen.

## Überblick

Das Hauptkonzept besteht darin, eine große Aufgabe (Summation bis zu einer Milliarde) auf mehrere Worker-Threads aufzuteilen. Jeder Worker-Thread erhält einen spezifischen Bereich an Zahlen, die er summieren soll, und führt diese Berechnung unabhängig von den anderen aus. Wenn alle Worker ihre Aufgaben abgeschlossen haben, werden die Ergebnisse zusammengezählt und die gesamte Laufzeit der Berechnung ausgegeben.

## Verwendung

Sie können die Anzahl der zu verwendenden Worker-Threads durch Änderung der workersCount-Variable im Hauptskript steuern. Die Anzahl der Worker sollte in der Regel nicht größer sein als die Anzahl der ausgelesenen CPU-Kerne auf Ihrem System, um die optimale Leistung zu erreichen.

Die Summation jeder Zahlenreihe erfolgt in einer Worker-Thread-Datei (worker.js). Jeder Worker empfängt eine Nachricht vom Hauptthread mit einem Objekt, das den start- und end-Wert des zu summierenden Bereichs enthält. Der Worker summiert dann alle Zahlen in diesem Bereich und sendet das Ergebnis zurück an den Hauptthread.

## Technologien

- Node.js
- Worker_threads Modul in Node.js (https://nodejs.org/api/worker_threads.html)

## Start

1. Installieren Sie Node.js auf Ihrem System (https://nodejs.org/en/download/)
2. Klonen Sie dieses Repository auf Ihren lokalen Computer
3. Navigieren Sie in Ihrem Terminal in das Projektverzeichnis und führen Sie `node .` aus.

## Support
Bei Fragen oder Problemen wenden Sie sich bitte an nile4000.

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert.
