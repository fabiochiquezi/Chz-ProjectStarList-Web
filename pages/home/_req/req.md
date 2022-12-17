# Requirements - /home

---

### Summary

Should have 2 sections:

1. Hero
2. List of works

---

#### 1. Hero

Rules:

- a screen height size with background
- div with description
- a button to do event signIn

Data:

```
background: string
title: string
description: string
button: presentationalElement {
  title: string,
  className: string,
  signInEvent: event,
  loading: boolean
}
```

<br>

#### 2. List of works

Rules:

- A list with: title and 16 works (movies/comics/games/series/music/animes)
- should have a skeleton to load it

Data:

```
list: title, thumb[]
title: presentationalElement {title: string}
thumb: presentationalElement {title: string, className: string}
```
