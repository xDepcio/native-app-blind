App flow (Scanning):
    - User odpala apke w celu uzyskania informacji o danym obiekcie.
        # Informacja może być zapisana jako:
            1. Tekst dla screen readera
            2. Plik audio .mp3
    - User klika zeskanuj produkt i na ekranie pojawia sie okienko skanowania, wyczekujące skan
    - User zbliża produkt i skanuje go.
        * Na server idzie request zawierający id taga.
        * Server lokalizuje zasób przypisany do id (text lub audio)
        * Server wysyła response zawierające tekst lub audio lub informacje o tym że do taga nie było przypisanego zasobu
    - User otrzymuje response i w zależności gdy jest to:
        1. Tekst: wyświetla tekst na ekranie aby screen reader mógł go odczytać.
        2. Audio: odtwarza plik audio.
