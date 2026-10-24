# База знаний для технических писателей

Сайт: https://technicalwriters.online/

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

## Домен

Домен `technicalwriters.online` зарегистрирован в REG.RU, DNS обслуживает Cloudflare (`jule.ns.cloudflare.com`, `lakas.ns.cloudflare.com`). Записи в Cloudflare, все в режиме **DNS only** (серое облачко):

| Тип | Имя | Значение |
|---|---|---|
| A | @ | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 (четыре записи) |
| CNAME | www | aliquis-est.github.io |
| TXT | _github-pages-challenge-Aliquis-est | код подтверждения домена в GitHub — не удалять |

Файл `CNAME` в корне репозитория хранит домен для GitHub Pages — не удаляйте его. Адрес https://aliquis-est.github.io/technicalwriters.online/ перенаправляет на домен.
