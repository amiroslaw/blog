---
title: vim
description: Filozoficzne podejście do nauki nietypowego edytora jakim jest vim. 
published: true
date: 2020-05-12
tags:
    - vim
    - tutorial
    - linux
photo: 
  header: assets/img/thumbnail/vim-logo.png
  card: assets/img/thumbnail/vim-logo-300.png
---

<img markdown="1" src="https://unicorn-utterances.com/static/d36f9347f2b108aa8245d47437003823/1b595/crutchcorn.png" />

<img src="https://unicorn-utterances.com/static/d36f9347f2b108aa8245d47437003823/1b595/crutchcorn.png" />

# Filozofia Vima - tryby i pliki
Długo przymierzałem się do napisania tego artykułu, który miałby za zadanie nauczyć i zachęcić do poznania Vima. Moja prokrastynacja wynikała z niezliczonych możliwości jakie daje te narzędzie. Po kilku latach używania tego edytora nadal uczę się nowych rzeczy.<!--more--> Na początku przygody z Vimem, [dokumentacja](https://www.vim.org/docs.php) lub darmowa [książka](ftp://ftp.vim.org/pub/vim/doc/book/vimbook-OPL.pdf) może być przytłaczająca. Warto natomiast poznać koncepcje na jakich został oparty edytor, i w czasie potrzeby zgłębiać wiedzę, spoglądając w instrukcję (`:help`). Dla osób które szybko się nudzą powstały gry do nauki jak [vim adventures](https://vim-adventures.com/) i [vim genius](http://www.vimgenius.com/). Bardzo dobrym źródłem wiedzy jest dostępna wraz z programem dokumentacja - vimtutor i strona z poradnikami wideo [vim casts](http://vimcasts.org/).  

![img-left vim-curve](assets/img/vim/vim-learning-curve.png)
Dlaczego zatem uczyć się edytora, którego korzenie sięgają 1976 roku? Odpowiedzi jest kilka w zależności od zapotrzebowania. Najważniejszą cechą wg. mnie jest efektywność. Vi (protoplasta Vim), był napisany w czasach, gdy interfejsy graficzne nie były popularne. Całą manipulacją dokumentu, trzeba było wykonywać przy pomocy klawiatury. Obsługa programu przez samą klawiaturę ma sens dzisiaj, ponieważ używanie myszki komputerowej jest nieoptymalne oraz bardziej naraża nasze nadgarstki na urazy. Program ten jest bardzo lekki (zajmuje ok. 10 MB), dzięki czemu możemy go znaleźć prawie na każdej instalacji Linuksa. Pożera też mało RAMu, szybko się otwiera nawet przy gigantycznych plikach tekstowych. Łatwość, duża możliwość konfiguracji oraz zbiór pluginów pozwala nam na dostosowanie edytora do naszych potrzeb. Vim posiada dużo zaawansowanych opcji, które ułatwią nam pisanie tekstu i oszczędzają czas. Niestety, aby skorzystać z tych benefitów musimy poznać podstawy działania, które są inne niż w typowych edytorach. 

W tym artykule jak i następnym przybliżę filozofię działania Vima. Uważam, że to lepsza nauka niż próba uczenia się skrótów w losowej kolejności. 
Będę się posługiwać konwencjami z Vima, tłumacząc jego zawiłości. Znak `c-` oznaczać będzie klawisz Control, dwukropek `:` komendę w trybie Command-line. W nawiasach okrągłych `()` będą nazwy angielskie używane przez Vima, natomiast nawiasy `{}` będą zawierać przykładowe parametry.

## Tryby pracy
![img-right Esc-key](assets/img/vim/vim-esc.jpg)  
Vim posiada [jedenaście](http://vimdoc.sourceforge.net/htmldoc/intro.html#vim-modes-intro) trybów pracy poza zwykłym jakim jest wpisywanie tekstu (Insert mode). Niech ta liczba Was nie przeraża, ponieważ niektóre z nich są podobne do siebie i mało używane. Jak uruchomimy Vima to wejdziemy w tryb normalny (Normal mode). Pozwala on nam na edytowanie tekstu oraz jest punktem startowym to wszystkich innych funkcji. Prawdopodobnie stąd powstał kawał związany z trudnością wyjścia z edytora.

- Normal mode - pozwala nam w łatwy sposób edytować tekst ponieważ, każdy klawisz w tym trybie może być skrótem klawiszowym. Z tego miejsca możemy dostać się do wszystkich innych trybów. Jak chcemy napisać tekst musimy wejść w tryb Insert przez:
	- `i`, `a` - stawia kursor przed podświetlonym znakiem, `a` za znakiem
	- `I`, `A` - stawia kursor na początek paragrafu, `A` na koniec
	- `o`, `O` - stawia kursor pod edytowaną linią, `O` nad nią
- Insert mode - zachowuje się jak zwykły edytor tekstowy, każdy naciśnięty znak pojawia się jako tekst. Nie znaczny to, że nie można w nim używać zwykłych skrótów klawiaturowych np. z Controlem. Chcąc przejść do Normal mode należy użyć `Esc`, `c-c` lub `c-[`. Używając `c-p` i `c-n` możemy aktywować autouzupełnianie i poruszać się w oknie dialogowym. 
- Visual mode - jest podobny do Normal mode, który pozwala nam na zaznaczanie tekstu, ma trzy warianty. Poniżej prezentuje skrót klawiszowy informujący jak przejść do niego z Normal mode:
	- `v` - precyzyjne zaznaczanie tekstu znak po znaku
	- `V` - zaznacza całe linie
	- `c-v` - zaznaczanie blokowe 
- Command-line mode - pozwala nam wywoływać komendy wpisując jej nazwę po dwukropku np. `:start` (przejście do trybu Insert). Natomiast znaki `/` i `?` służą do wyszukiwania tekstu. Ciekawostką jest możliwość wywoływania komend powłoki systemowej. Poprzedzając poleceniem bashowym wykrzyknikiem np. `!ls`, wyświetlimy listę plików w bieżącym katalogu. Używając uzupełnienia `c-d`, możemy zobaczyć pasujące polecenia.
- Replace mode - w trybie Insert przejdziemy do niego wciskając przycisk `insert`, zachowanie tego trybu jest takie same jakbyśmy zrobili to samo w LibreOffice. Do trybu podmieniania znaków możemy też przejść z Normal mode klawiszem `R`.

![img-right exit from vim](assets/img/vim/kiedy-prbujesz-wyj-z-vim.jpg)  

To nie są wszystkie tryby pracy, lecz najważniejsze. Szczególnie w trybach Normal i Insert będziemy spędzać najwięcej czasu. Visual mode powinniśmy unikać. Lepiej nauczyć się używać efektywniej metod skakania po tekście w normalnym trybie.   
Więc jak wyjść z Vima? ;) "To zależy" - jakby to odpowiedział dobry adwokat. W różnych trybach można zrobić te same operacje i to od nas zależy jaki sposób będzie wygodniejszy w danej sytuacji. Po drugie, istnieje dużo aliasów robiących to samo. Przykładowo w normalnym trybie wyjść z Vima można na kilka sposobów:

- `:wq`, `:x` lub `ZZ` - zapisanie i wyjście
- `!q` lub `ZQ` - wyjście bez zapisywania
- `:qa` - zamknięcie wszystkich otwartych plików

## Zakładki
Przy długim dokumencie możemy ustawiać zakładki, i szybko przeskakiwać pomiędzy nimi. Zakładkom można nadawać jednoliterowe tagi - od a do z (i A-Z). Odwołujemy się do nich przez klawisze `'` lub \` (gravis).
Pierwszy znak to linia, gdzie znajduje się zakładka, druga pozwoli nam przeskoczyć też do konkretnej kolumny w tekście. Możemy używać ich zamiennie w zależności od potrzeb.

- `mx` - tworzy zakładkę w tekście o nazwie `x` 
- `'x` - przejście do zakładki `x` 
- `['`, `]'` - poprzednia, następna zakładka  
- `d'a` - usuwa zakładkę 
- `:marks` - pokazanie wszystkich znaczników
- `:delmarks a-c` - usunięcie zakładek od a do c  
- `.` - skok do ostatnio edytowanej linii  
- \`\` lub `''` - przechodzenie do poprzedniego miejsca, z którego skoczyliśmy

Jeśli nie będziecie chcieli zapamiętywać jakie litery nadaliście swoim zakładkom, to proponuję zainstalować plugin [vim-bookmarks](http://blog.mattes-groeger.de/vim-bookmarks/). 

## Pliki i karty
Vim dostarcza nam kilka narzędzi do zarządzania plikami. Pierwsze jakie chciałem opisać to podział ekranu. Jak chcemy podzielić okno horyzontalnie na dwie części to w Command-line mode musimy wpisać `:split` lub tylko `:sp`. Analogicznie do podziału wertykalnego użyjemy komend `:vsplit` lub `:vs`. Dzielić ekran możemy kilkukrotnie, ważne, jednak na jakim oknie aktualnie się znajdujemy. Polecenie `:resize 90` ustawi nam szerokość okna na 90 kolumn, natomiast `:vertical resize 80` na 80 wierszy. 

- `c-w w` lub `c-w c-w` - przełącza okna z jednego okna na drugie
- `c-w j`, `c-w k`, `c-w h`, `c-l` - odpowiednio przełącza na okno dolne, górne, lewe i prawe. Zamiast `hjkl` można używać strzałek
- `c-w +`, `c-w -` - zwiększa, zmniejsza rozmiar okna w układzie horyzontalnym
- `c-w >`, `c-w <` - zwiększa, zmniejsza rozmiar okna w układzie wertykalnym
- `c-w _` - maksymalizuje okno
- `c-w =` - ustawia okna na takie same rozmiary
![split windows](assets/img/vim/split-vim.png "vim split")  

### Karty 
Dodatkowo Vim wspiera karty, dzięki czemu możemy mieć otwarte kilka dokumentów. 

- `:tabnew` - stworzenie pustej karty
- `:tabclose` - zamknięcie aktualnej karty
- `:tabnext`, `gt` - przejście do następnej karty
- `:tabnext`, `gT` - przejście do poprzedniej karty
- `:tabfirst`, `:tablast` - przejście do pierwszej, ostatniej karty

### Manager plików
Instalacja Vima zawiera plugin netrw, który jest przeglądarką plików. Dzięki niej możemy zarządzać plikami i katalogami. 

- `:E` lub `:Explore` - otwiera listę plików w katalogu, gdzie znajduje się otwarty plik
- `:Se` lub `:Sexplore`, (`Sex` też działa ;)) - otwiera przeglądarkę w podziale horyzontalnym
- `:Vex` lub `:Vexplore` - otwiera przeglądarkę w podziale wertykalnym
- `i` -	przełącza między różnymi trybami wyświetlania listy plików (lista, szczegóły, drzewo)  
- `s` -	sortuje pliki
- `R` - zmienia nazwę pliku lub katalogu
- `D` -	usuwa plik lub katalog
- `d` -	tworzy nowy katalog  
- `%` -	tworzy nowy plik w bieżącym katalogu (zapyta o nazwę)  
- `e` -	otwiera plik w bieżącym oknie  
- `o`, `v` - otwiera plik w poziomo `o` lub pionowo `v` podzielonym oknie  

Jest to pierwsza część dotycząca podstaw w używaniu najlepszego na świecie edytora tekstowego. :> Nie będę na razie opisywać takich funkcji jak zwijanie i porównywanie napisów, bufory, makra i podświetlanie kodu. Warto jednak wiedzieć, że takie funkcje są dostępne. Zapraszam jednak do przeczytania [drugiej](http://www.miroslaw.ovh/filozofia-vima-edycja) części. Opisuję w niej najważniejszą (i trudniejszą) funkcję jaką mają edytory tekstowe. Tak zgadliście mówię o manipulowaniem tekstu. :D
![madness](assets/img/vim/this-is-vim.jpg)  
  
