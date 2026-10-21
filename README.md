# База знаний для технических писателей

Сайт: https://aliquis-est.github.io/technicalwriters.online/

Статический сайт для GitHub Pages: обычные HTML-страницы, общий стиль `assets/site.css` и небольшой скрипт `assets/site.js` (баннер cookie и подсветка оглавления). Сборка не нужна.

## Публикация

Pages публикует ветку `main`, папку `/ (root)`. Чтобы обновить сайт, закоммитьте изменения и отправьте их в `main` — через минуту GitHub пересоберёт сайт.

Адрес сайта прописан в `<link rel="canonical">` и `og:url` каждой страницы, в `sitemap.xml`, `robots.txt` и `privacy.html`. При переезде на другой адрес поменяйте его там.

## Страницы

| Адрес | Файл |
|---|---|
| `/` | `index.html` |
| `/techwriterbooks` | `techwriterbooks.html` |
| `/analystbooks` | `analystbooks.html` |
| `/cookies` | `cookies.html` |
| `/general-privacy` | `general-privacy.html` |
| `/oferta_foto` | `oferta_foto.html` |
| `/privacy` | `privacy.html` — перенаправляет на `/general-privacy` |

GitHub Pages сам отдаёт `techwriterbooks.html` по адресу `/techwriterbooks`.

## Как добавить книгу

Откройте нужный список (`techwriterbooks.html` или `analystbooks.html`), найдите раздел и скопируйте любой блок `<li class="book">…</li>`:

```html
<li class="book">
  <div class="n">07</div>
  <div>
    <div class="t">Название книги</div>
    <div class="a">Автор</div>
    <div class="isbn">ISBN 978-…</div>
  </div>
</li>
```

Строки автора и ISBN можно убрать. Не забудьте поправить число книг в заголовке раздела, в оглавлении и под заголовком страницы.

## Собственный домен

Чтобы сайт открывался по собственному домену, укажите его в Settings → Pages → Custom domain
(GitHub создаст файл `CNAME`) и настройте DNS у регистратора по инструкции GitHub.
