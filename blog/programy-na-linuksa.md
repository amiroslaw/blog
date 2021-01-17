---
title: Programy na linuksa
description: Jak szukać zamienników programów napisanych na Linuksa wraz z moimi rekomendacjami. 
published: true
date: 2020-02-30
tags:
    - Programy
    - Tutorial
    - Linux
    - Porady
photo: 
  header: assets/img/thumbnail/looking-at-board.jpeg
  card: assets/img/thumbnail/looking-at-board-small.jpeg
---

<div id="toc" >
  <div>Spis treści:</div>
</div>

## Wstęp
Dla	osoby zaczynającej przygodę z systemami GNU/Linux, początek może być bardzo frustrujący z uwagi na brak wsparcia programów z którymi się zapoznaliśmy używając Windowsa. Często osoba w takiej sytuacji narzeka na niedobór oprogramowania lub w najgorszym przypadku próbuje instalować swoje ulubione programy przez Wine. Rozwiązaniem sytuacji powinno być przede wszystkim szukanie programów napisanych natywne pod Linuksa. Może to zająć trochę czasu, dlatego powstał ten post. Mam nadzieję, że osoby używające pingwina codziennie, znajdą też coś ciekawego lub podzielą się w komentarzu własnymi propozycjami. 

## Jak szukać programów?
![question_makr](assets/img/posts/2020/ask-blackboard-chalk-board-356079-300x182.jpg)
Moja propozycja programów jest tylko małym wycinkiem dostępnego oprogramowania na Linuksy. Różne dystrybucje podchodzą do tego inaczej, więc należy się zapoznać jak instalować paczki z programami. Najprostszym sposobem do zainstalowania programu jest otworzenie odpowiednika Windowsowskiego sklepu - w Linux Mint jest to menedżer oprogramowania. W systemach pochodnych do debiana operację taką wykonamy też w terminalu: 
```bash
apt-cache search wyszukiwany_program
sudo apt-get install nazwa_paczki
```
Alternatywami menedżera oprogramowania i apt jest Synaptic i aptitude z łatwiejszymi do zapamiętania poleceniami. Czasami jednak trzeba je zainstalować. ![Synaptic](assets/img/posts/2020/synatpic-768x537.jpg)

Jak nie znajdziemy nic co nas interesuje w repozytorium lub nie wiemy jak nazywa się program, możemy zajrzeć na stronę  [alternativeTO](https://alternativeto.net/platform/linux/). Portal ten posiada zbiór rekomendowanych aplikacji. Możemy wpisać nazwę programu który znamy z Windowsa i przefiltrować wyniki po platformie Linux. Na oficjalnej stronie wybranego projektu powinniśmy mieć instrukcję instalacji na nasz system. W Ubuntu i Mint będzie to pobranie paczki z rozszerzeniem .deb lub dodanie jego do repozytorium przez PPA. W najgorszym przypadku będziemy musieli pobrać kod programu i go skompilować. 

Chciałbym wspomnieć, też o nowych technologiach które mają na celu uprościć instalację oprogramowanie nie patrząc na jakiej dystrybucji pracujemy. [AppImage](https://appimage.org/) jest chyba najprostszym sposobem, aby to osiągnąć. [Flatpak](https://flatpak.org/) i [Snap](https://snapcraft.io/store) posiadają własne centra. 

## Lista aplikacji 
Poniższa lista zawiera w dużej mierze programy, z których korzystam lub korzystałem. Unikałem aplikacji napisanych w Qt, aby nie pobierać za dużo paczek, pomaga to też, aby system wyglądał spójnie. Nie ukrywam, że część aplikacji jest minimalistyczna. Dodałem także programy bardzo stare, które nie są już wspierane, jednak działają dobrze, a jak coś działa to po co to zmieniać. ;)  
Zamierzam w przyszłości opublikować post z listą programów działających w konsoli (CLI), dlatego nie chcę się powielać i nie zamieściłem ich tutaj. W podpunktach zawarłem alternatywy do proponowanego programu.

- [Megasync](https://mega.nz/) Synchronizacja plików z chmury Mega. Usługa ta daje nam 50 GB miejsca na nasze pliki.
	- Dropbox → Popularna alternatywa, oferująca jednak mniej darmowej przestrzeni. 
- [anki](https://apps.ankiweb.net/) → Program do nauki, głównie wykorzystywany do zapamiętania słówek z obcego języka. Pakiety słówek można pobierać z strony projektu. Jest dostępna wersja na androida - AnkiDroid. 
- [pidgin](https://www.pidgin.im/) → Komunikator internetowy, pozwalający na łączenie się z różnymi protokołami np. IRC, Skype, Facebook. Dostępna jest, też wersja konsolowa. 
- [qBittorrent](https://www.qbittorrent.org/) → Klient torrent. 
	- Transmission 
- [retroarch](http://www.retroarch.com/) → Emulator systemów, umożliwiających granie w gry z takich konsol jak GameBoy, Atari, NES. 
- [KeePassXC](https://keepassxc.org) → Manager haseł, dostępne są wersje na androida (Keepass2Android) i terminala ) i CLI.
- [Double Commander](https://doublecmd.sourceforge.io/index.php?lang=eng) → Manager plików dwu panelowy jak Total Commander. 
	- krusader → Wersja KDE.		
	- Vifm → Wersja działająca w terminalu. 

### Przeglądarki internetowe
- [Vivaldi](https://vivaldi.com/?lang=pl_PL) → Posiada dużo funkcji i udogodnień. Oparta na silniku z Chrome, wspiera także jej rozszerzenia. Trochę dużo zajmuje pamięci operacyjnej. 
- Firefox → Od wersji Quantum stała się bardzo lekka i o wiele lepiej działa.
- [qutebrowser](https://qutebrowser.org/) → Lekka przeglądarka wspierająca nawigację z vim.
- Chrome i Chromium 
- [Falkon](https://www.falkon.org/) → Dawna qupzilla, jeszcze w wersji beta. Napisana w technologii QT. 

Vivaldi bardzo fajna, trzeba doinstalować dodatkowe paczki, miałem problemy z video, pobiera dużo ramu
wersja, ma kilka rozszerzeń wbudowanych, np. addblockera defaultowo
pale moon taki firefox, dostęp do pluginów z firefox → Basilisk
Opera
chrome i chromium pobierają dużo ramu  

### Multimedia
- [Kodi](https://kodi.tv/) → Centrum multimedialne.
- [Steam](http://store.steampowered.com/) → Cyfrowy sklep z grami komputerowymi.
- [Clementine](https://www.clementine-player.org/) → Odtwarzacz muzyki, potrafiący też odtwarzać radia internetowe. 
	- Amarok
	- Ario - Klient dla MPD.
	- [Ambient Noise Player](http://anoise.tuxfamily.org/) → Odtwarza dźwięki relaksacyjne jak deszcz, las.   
- [gPodder](https://gpodder.github.io/) → Manager podcastów, posiadający wersję webową gpodder.net i na androida. 
	- [Hammond](https://github.com/alatiera/hammond) 
- [Gradio](https://github.com/haecker-felix/gradio) → Radio internetowe.
	- Goodvibes 
- [SMplayer](http://www.smplayer.info/pl/info) → Odtwarzacz wideo. 
	- VLC 
- [QWinFF](http://qwinff.github.io/) → Nakładka na świetny program ffmpeg do nagrywania, konwertowania audio/wideo.
	- HandBrake → Konwerter wideo.
	- [VidCutter](http://vidcutter.ozmartians.com/)  → Wycinanie i scalanie fragmentów wideo.
- [qnapi](http://qnapi.github.io/) → Program do pobierania napisów filmowych.   

### Grafika
- [Gimp](https://www.gimp.org/) → Edytor grafiki.
- [xnview](http://www.xnview.com/en/xnviewmp/#features) → Przeglądarka i konwersją zdjęć.
	- [vimiv](http://karlch.github.io/vimiv/) → Lekka przeglądarka zdjęć z skrótami jak w vimie. 
	- sxiv 
	- Viewnior
- [Darktable](https://www.darktable.org/)	→ Obróbka zdjęć (jak Lightroom).
	* RawTherapee  
	* digiKam  
	* LightZone  
	* Photivo  
  
### Programy biurwe  
- [LibreOffice](https://www.libreoffice.org/) → Pakiet biurowy.
	- WPS Office
	- AbiWord → Lekki edytor tekstu.
- [Thunderbird](https://www.mozilla.org/thunderbird) → Klient pocztowy.
	- Claws Mail 
	- Geary 
- [GoldenDict](http://goldendict.org/) → Słownik
	- StarDict → Już nie wspierany.
- [GnuCash](https://www.gnucash.org/) → Zarządzanie budżetem domowym i małych firm. Zgodny z regułą podwójnego zapisu.
	- Eqonomize  
	- Homebank  
- [calibre - E-book management](https://calibre-ebook.com/) → Manager e-booków, w pakiecie jest zawarta przeglądarka książek elektronicznych.
	- [buka ebook reader](https://github.com/oguzhaninan/Buka)  
- [Freeplane](https://www.freeplane.org/wiki/index.php/Home) → Tworzenia map myśli.
	- [xmind](http://www.xmind.net/)  
	- freemind
- [zathura  i mupdf](https://pwmt.org/projects/zathura/) → Lekka przeglądarka PDF.
	- [Okular](https://okular.kde.org/) → Wersja KDE.
- [PDFsam](http://www.pdfsam.org/) → Program do modyfikowania plików PDF
	- PDFMod  
	- [Xournal](http://xournal.sourceforge.net/) → Notatki i adnotacje PDF. 
- [Typora](https://typora.io/) → Tworzenie i podgląd notatek zapisanych w formacie Markdown.
	- Boostnote 
	- Simplenote 
	- [Remarkable](http://remarkableapp.github.io/linux.html)

### Narzędzia systemowe
- [tilda](http://tilda.sourceforge.net/) → Drop-down terminal.
	- Guake terminal 
	- yakuake → Wersja dla KDE.   
- final term ciężkie termnale
- [termite](https://github.com/thestinger/termite/) → Posiada tryby jak w vim. 
	- [terminology](http://www.ubuntu-pomoc.org/terminology-wiecej-niz-kolejny-emulator-terminala/)  → Rozbudowany terminal z wieloma funkcjami.
	- st → Bardzo lekki terminal.
- [LCD Nurse](http://en.congelli.eu/prog_info_lcdnurse.html) → Szukanie martwych pikseli w monitorach LCD.
- [ClamTK](https://dave-theunsub.github.io/clamtk/) → Antywirus
- [fslint](http://www.pixelbeat.org/fslint/) →	Narzędzie do szukania duplikatów, pustych folderów itp.
- [ClamTK](http://pl.wikibooks.org/wiki/Ubuntu/Program_antywirusowy)		ClamAV	→ nakładka gui na antywirus  
- kazam → Nagrywanie pulpitu.
- [rofi](https://davedavenport.github.io/rofi/) → Program do przełączania i uruchamiania aplikacji jak dmenu. 
	- [kupfer](https://kupferlauncher.github.io/)  
- [patool](https://github.com/wummel/patool) → Manager do archiwizacji i kompresji danych. Wspiera dużą ilość rozszerzeń.
	- atool
	- 7zip  
- [ANGRYsearch](https://github.com/DoTheEvo/ANGRYsearch) → Wyszukiwarka plików. 
	- [recoll](http://www.lesbonscomptes.com/recoll/) 
- [UNetbootin](https://unetbootin.github.io/)  → Tworzenie USB boot.  
- [Stacer](https://github.com/oguzhaninan/Stacer) → Optymalizacja systemu.
- [Shutter](http://shutter-project.org/) → Tworzenie zrzutów ekranu. 
- [linssid](https://sourceforge.net/projects/linssid/) → Skanowanie sieci bezprzewodowych.
- [bleachbit](https://www.bleachbit.org/) → Czyszczenie systemu z niepotrzebnych plików.
- Unclutter → Ukrywanie wskaźnika myszy w czasie spoczynku.
- Hardinfo → Informacje o sprzęcie i systemie. 
	- lshw → info o systemie można zainstalować nakładkę GUI.  
- [Synaptic](http://www.nongnu.org/synaptic/) → Manager pakietów.  
- [meld](http://meldmerge.org/) → Porównywanie plików tekstowych w poszukiwaniu różnic.
- [brasero](https://wiki.gnome.org/Apps/Brasero) → Nagrywarka płyt. 
	- [AcetoneISO](https://sourceforge.net/projects/acetoneiso/)  → Tworzenie plików ISO.
	- Furiusisomount  
	
### Ergonomia
- [EasyStroke](https://github.com/thjaeger/easystroke/wiki) → Program umożliwia mapowanie gestów myszki z skrótami klawiaturowymi lub poleceniami konsolowymi. Nie jest już wspierany, ale nadal prawidłowo działa. 
- [Workrave](http://www.workrave.org/) → Program mówiący kiedy mamy zrobić sobie przerwę od komputera.
	- [Hamster](https://projecthamster.wordpress.com/about/) → Monitorowanie czasu. 
- [redshift](http://jonls.dk/redshift) → Aplikacja starająca się ograniczyć niebieskie światło od monitora.
	- f.lux  
- [CopyQ](http://hluk.github.io/CopyQ/) → Manager schowka systemowego.
	- cliplt  

### Narzędzia developerskie
- [Eclipse](http://www.eclipse.org/downloads/eclipse-packages/) → Środowisko programistyczne do min. Java, PHP, C, C++.
	- IntelliJ IDEA:
	- [code blocks](http://www.codeblocks.org/)  
	- [visual studio code](https://code.visualstudio.com/)
	- atom
	- brackets
- [zeal](https://zealdocs.org/) → Dokumentacja offline. 
- [filezilla](https://filezilla-project.org/) → Klient FTP.
- [dbeaver](http://dbeaver.jkiss.org/) → Uniwersalny klient do zarządzania bazami danymi.
	- mysql workbench  
	- DbVisualizer 
- [git](https://git-scm.com/) → Manager kontroli wersji. 
	- kraken
	- smartgit


