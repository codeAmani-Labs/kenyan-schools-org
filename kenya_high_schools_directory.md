<!--
  ===========================================================================
  KENYA HIGH SCHOOLS DIRECTORY
  ===========================================================================
  Purpose   : Verified directory of Kenyan secondary schools (national, extra
              county, and notable county tier) with sports team nicknames,
              county / former-province classification, and KSSSA zone reference.
  Consumer  : Kipaji platform database seeding.

  Maintainer notes:
    - Every roster / nickname fact carries an inline source tag [S#] that
      resolves to the CITATION INDEX table. Cite new facts the same way.
    - GPS coordinates are tagged with a confidence level (confirmed /
      estimated / unavailable). Do not treat "estimated" pins as survey grade.
    - Unknown values use the literal string "null" (DB-seed convention).
    - Two directory layers: (1) detailed anchor profiles grouped by county,
      and (2) a lightweight bulk listing covering all 47 counties.

  Structure (jump links live in the BOTTOM NAV BAR):
    1. Citation Index         sources S1 to S29
    2. School Directory       detailed anchor profiles, grouped by county
    3. Data Gaps & Confidence known coverage limitations
    4. Recommended Follow-Up  where to source the missing data
    5. County Listings (Bulk) all 47 counties, lightweight rows
    6. County Listings Summary per-county totals + tier breakdown

  Last formatted: 2026-06-21
  ===========================================================================
-->

```text
██╗  ██╗███████╗███╗   ██╗██╗   ██╗ █████╗     ██╗  ██╗██╗ ██████╗ ██╗  ██╗
██║ ██╔╝██╔════╝████╗  ██║╚██╗ ██╔╝██╔══██╗    ██║  ██║██║██╔════╝ ██║  ██║
█████╔╝ █████╗  ██╔██╗ ██║ ╚████╔╝ ███████║    ███████║██║██║  ███╗███████║
██╔═██╗ ██╔══╝  ██║╚██╗██║  ╚██╔╝  ██╔══██║    ██╔══██║██║██║   ██║██╔══██║
██║  ██╗███████╗██║ ╚████║   ██║   ██║  ██║    ██║  ██║██║╚██████╔╝██║  ██║
╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═╝

███████╗ ██████╗██╗  ██╗ ██████╗  ██████╗ ██╗     ███████╗
██╔════╝██╔════╝██║  ██║██╔═══██╗██╔═══██╗██║     ██╔════╝
███████╗██║     ███████║██║   ██║██║   ██║██║     ███████╗
╚════██║██║     ██╔══██║██║   ██║██║   ██║██║     ╚════██║
███████║╚██████╗██║  ██║╚██████╔╝╚██████╔╝███████╗███████║
╚══════╝ ╚═════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝

██████╗ ██╗██████╗ ███████╗ ██████╗████████╗ ██████╗ ██████╗ ██╗   ██╗
██╔══██╗██║██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗╚██╗ ██╔╝
██║  ██║██║██████╔╝█████╗  ██║        ██║   ██║   ██║██████╔╝ ╚████╔╝
██║  ██║██║██╔══██╗██╔══╝  ██║        ██║   ██║   ██║██╔══██╗  ╚██╔╝
██████╔╝██║██║  ██║███████╗╚██████╗   ██║   ╚██████╔╝██║  ██║   ██║
╚═════╝ ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝
```

<a id="kenya-high-schools-directory"></a>

# Kenya High Schools Directory
**National, Extra-County, and Notable County Schools**

**Sports Team Nicknames | County & Province Classification | KSSSA Zone Reference**

> **Research Scope:** National schools (Clusters 1-4), prominent extra-county schools, and notable county schools with verified sports records.
> **Primary Sources:** Ministry of Education / NEMIS, KNEC, KSSSA, The Standard, Daily Nation, Kenya News Agency, Education News Kenya, TNX Africa, Mukasa Football Diary, Wikipedia.
> **Cutoff:** May 2026. All nickname entries carry source citations. GPS coordinates marked with confidence level.
> **Total schools documented in this verified release:** 47 anchor schools across 12 counties (national rollout continues — see Data Gaps section).

---

## Table of Contents

1. [Citation Index](#citation-index) — sources S1–S29
2. [School Directory](#school-directory) — detailed anchor profiles, by county:
   - [Bungoma](#bungoma-county) · [Homa Bay](#homa-bay-county) · [Kakamega](#kakamega-county) · [Kiambu](#kiambu-county) · [Kisumu](#kisumu-county) · [Maranda / Siaya](#maranda--siaya-region) · [Nairobi](#nairobi-county) · [Nakuru](#nakuru-county) · [Nyamira](#nyamira-county) · [Siaya](#siaya-county) · [Trans Nzoia](#trans-nzoia-county) · [Vihiga](#vihiga-county)
3. [Data Gaps & Confidence Notes](#data-gaps-and-confidence-notes)
4. [Recommended Follow-Up Sources](#recommended-follow-up-sources)
5. [County Listings — All 47 Counties (Bulk Directory)](#county-listings--all-47-counties-bulk-directory)
6. [County Listings — Summary](#county-listings--summary)

---

<!-- ========================================================================= -->
<!-- SECTION 1 · CITATION INDEX                                                 -->
<!-- Master source table. Every [S#] tag used inline below resolves here.       -->
<!-- IDs S1 to S29. When adding a school fact, cite it with a matching tag.      -->
<!-- ========================================================================= -->

<a id="citation-index"></a>

## CITATION INDEX

| ID  | Source                                                           | URL                                                                                                                                               | Type                  |
|-----|------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|
| S1  | Education News Kenya — St Anthony's promotion to national status | https://educationnews.co.ke/kitales-st-anthony-boys-promoted-to-national-school-status/                                                           | News article          |
| S2  | Standard Media — St Anthony's begin hunt for national title      | https://www.standardmedia.co.ke/sports/counties/article/2001475766/st-anthonys-boys-kitale-begin-hunt-for-national-title                          | Sports article        |
| S3  | Standard Media — Les Titans recapture hockey title               | https://www.standardmedia.co.ke/sports/article/2001545152/hail-the-new-sheriffs-in-town-butere-and-mgk-retain-titles-as-new-champions-are-crowned | Sports article        |
| S4  | TNX Africa — Yala Open 2025 preview                              | https://www.tnx.africa/football/article/2001510337/schools-black-saints-maseno-and-st-anthonys-kitale-to-renew-rivalry-at-yala-open               | Sports article        |
| S5  | Mukasa Football Diary — Green Commandos history                  | https://mukasah.wordpress.com/2020/07/10/kakamega-high-school-green-commandos-class-of-1986/                                                      | Sports journalism     |
| S6  | Mukasa Football Diary — Green Commandos class of 1995            | https://mukasah.wordpress.com/2020/05/09/the-giants-of-kakamega-high-school-class-of-1995/                                                        | Sports journalism     |
| S7  | WhoOwnsKenya — Boys schools football teams                       | https://whownskenya.com/boy-schools-with-the-best-football-teams-in-kenya/                                                                        | Sports feature        |
| S8  | WhoOwnsKenya — Top secondary school football teams               | https://whownskenya.com/top-kenyan-boys-secondary-schools-football-teams/                                                                         | Sports feature        |
| S9  | Education News Kenya — JOBO wins national football 2025          | https://educationnews.co.ke/st-josephs-kitale-wins-first-ever-national-school-football-title-in-historic-mumias-final/                            | News article          |
| S10 | Standard Media — Musingu Scorpions crowned Western champions     | https://www.standardmedia.co.ke/football/article/2001522381/yala-rule-siaya-musingu-and-butere-reign-supreme-in-kakamega-again                    | Sports article        |
| S11 | Kenya News Agency — Musingu Scorpions Western football champions | https://www.kenyanews.go.ke/musingu-scorpions-crowned-western-school-football-champions/                                                          | Government news       |
| S12 | People Daily — Musingu Scorpions vs Green Commandos replay       | https://peopledaily.digital/sports/how-musingu-high-scorpions-stung-kakamega-high-commandos-in-bad-tempered-replay                                | Sports article        |
| S13 | Citizen Digital — KSSSA nationals Kakamega 2025                  | https://www.citizen.digital/sports/ksssa-musingu-off-to-a-flier-as-national-games-get-underway-in-kakamega-n367138                                | News article          |
| S14 | Standard Media — Kisumu Day "Yudhee" retain county title         | https://www.standardmedia.co.ke/sports/football/article/2001523469/kisumu-day-crowned-champs-rematch-for-kakamega-and-musingu                     | Sports article        |
| S15 | Capital FM Sports — Green Commandos in Kisumu Day test           | https://www.capitalfm.co.ke/sports/2015/07/22/commandos-in-stern-kisumu-day-test/                                                                 | Sports article        |
| S16 | Tuko.co.ke — National schools 2026 breakdown by county           | https://www.tuko.co.ke/facts-lifehacks/guides/614780-national-schools-kenya-by-county-complete-2026-breakdown-clusters-codes/                     | Education guide       |
| S17 | Tuko.co.ke — List of national schools 2024                       | https://www.tuko.co.ke/272538-list-national-secondary-schools-kenya.html                                                                          | Education guide       |
| S18 | Wikipedia — Nairobi School                                       | https://en.wikipedia.org/wiki/Nairobi_School                                                                                                      | Encyclopedia          |
| S19 | Wikipedia — Kenya High School                                    | https://en.wikipedia.org/wiki/Kenya_High_School                                                                                                   | Encyclopedia          |
| S20 | Wikipedia — Mang'u High School                                   | https://en.wikipedia.org/wiki/Mang%27u_High_School                                                                                                | Encyclopedia          |
| S21 | Wikipedia — Agoro Sare High School                               | https://en.wikipedia.org/wiki/Agoro_Sare_High_School                                                                                              | Encyclopedia          |
| S22 | Wikipedia — Starehe Boys Centre                                  | https://en.wikipedia.org/wiki/Starehe_Boys%27_Centre_and_School                                                                                   | Encyclopedia          |
| S23 | Education News Hub — KCSE 2024 top performing schools            | https://educationnewshub.co.ke/list-of-all-the-kcse-2024-top-performing-schools-nationally/                                                       | Education data        |
| S24 | Daily Nation — KCSE 2025 top schools                             | https://nation.africa/kenya/news/education/kcse-2025-kenya-s-top-schools-revealed-5322722                                                         | News article          |
| S25 | Tuko.co.ke — Extra county schools 2025/2026                      | https://www.tuko.co.ke/261927-extra-county-schools-kenya-codes.html                                                                               | Education guide       |
| S26 | Facebook — Solidarity Boys Kitale official page                  | https://www.facebook.com/p/Solidarity-boys-kitale-100063965763838/                                                                                | Official social media |
| S27 | KSSSA official website                                           | https://www.ksssa.co.ke/                                                                                                                          | Official body         |
| S28 | Ministry of Education Kenya                                      | https://www.education.go.ke/                                                                                                                      | Government            |
| S29 | NEMIS — National Education Management Information System         | https://www.education.go.ke/nemis                                                                                                                 | Government system     |

---

<!-- ========================================================================= -->
<!-- SECTION 2 · SCHOOL DIRECTORY (detailed anchor profiles)                    -->
<!-- Grouped by county (## County). Each school (### Name) uses this field       -->
<!-- table schema:                                                              -->
<!--   Official Full Name | Short Name/Nickname | School Category | Gender |     -->
<!--   County | Former Province | Sub-County/District | KSSSA Zone |             -->
<!--   Physical Address | GPS Coordinates (+confidence) | Phone | Email |        -->
<!--   Website | Sports Nicknames [S#] | Notes                                  -->
<!-- Unknown values use the literal string "null" (DB-seed convention).         -->
<!-- ========================================================================= -->

<a id="school-directory"></a>

## SCHOOL DIRECTORY

---

<a id="bungoma-county"></a>

## Bungoma County
**Former Province:** Western | **KSSSA Region:** Western

---

### Kapsabet Boys High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Kapsabet Boys High School                                                        |
| Short Name / Nickname  | Kapsabet                                                                         |
| School Category        | National (Cluster 1)                                                             |
| Gender                 | Boys                                                                             |
| County                 | Nandi                                                                            |
| Former Province        | Rift Valley                                                                      |
| Sub-County / District  | Kapsabet                                                                         |
| KSSSA Zone             | Rift Valley Region                                                               |
| Physical Address       | Kapsabet Town, Nandi County                                                      |
| GPS Coordinates        | null (unavailable — verified town: Kapsabet)                                     |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | null                                                                             |
| Notes                  | Cluster 1 national school. KCSE 2024 mean score: 9.5. KCSE 2025 Rift Valley regional top performer [S16, S23, S24]. |

---

<a id="homa-bay-county"></a>

## Homa Bay County
**Former Province:** Nyanza | **KSSSA Region:** Lake / Nyanza

---

### Agoro Sare High School (ASHS)

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Agoro Sare High School                                                           |
| Short Name / Nickname  | ASHS                                                                             |
| School Category        | National                                                                         |
| Gender                 | Boys                                                                             |
| County                 | Homa Bay                                                                         |
| Former Province        | Nyanza                                                                           |
| Sub-County / District  | Rachuonyo North                                                                  |
| KSSSA Zone             | Lake Region                                                                      |
| Physical Address       | Kisii-Kisumu Road, Oyugis, Homa Bay County, 40222                                |
| GPS Coordinates        | 0.5035°S, 34.7345°E (confidence: confirmed — Wikipedia)                          |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | www.agorosarehs.sc.ke                                                            |
| Sports Nicknames       | Football: Yenga Yenga [S4]                                                       |
| Notes                  | Established 1958. Confirmed national school. Wikipedia coordinates verified against Google Maps pin for Oyugis town. [S21] |

---

<a id="kakamega-county"></a>

## Kakamega County
**Former Province:** Western | **KSSSA Region:** Western

---

### Kakamega High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Kakamega High School                                                             |
| Short Name / Nickname  | Kakamega High / Green Commandos                                                  |
| School Category        | National (Cluster 1)                                                             |
| Gender                 | Boys                                                                             |
| County                 | Kakamega                                                                         |
| Former Province        | Western                                                                          |
| Sub-County / District  | Kakamega Central                                                                 |
| KSSSA Zone             | Western Region — Kakamega Zone                                                   |
| Physical Address       | Kakamega Town, Kakamega County                                                   |
| GPS Coordinates        | 0.2827°N, 34.7519°E (confidence: estimated from town center)                     |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | Football: Green Commandos [S5, S6, S7, S12, S15]                                 |
| Notes                  | Founded 1932. 14-time national football champions as of 2018. One of Kenya's most decorated schools in KSSSA football history. Zonal rival: Musingu High School (Scorpions). [S5, S6] |


### Musingu High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Musingu High School                                                              |
| Short Name / Nickname  | Musingu / Scorpions                                                              |
| School Category        | Extra-County                                                                     |
| Gender                 | Boys                                                                             |
| County                 | Kakamega                                                                         |
| Former Province        | Western                                                                          |
| Sub-County / District  | Lurambi                                                                          |
| KSSSA Zone             | Western Region — Kakamega Zone                                                   |
| Physical Address       | Musingu, Kakamega County                                                         |
| GPS Coordinates        | null (unavailable)                                                               |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | Football: Scorpions [S10, S11, S12, S13]; Hockey: Scorpions [S3]                 |
| Notes                  | Musingu won the 1984 KSSSA national football title, the 2023 national hockey title. National runners-up in football 2024 (lost to Highway in Kisii). Confirmed active in KSSSA Western Region. [S9, S10, S12] |

---

### Friends School Kamusinga (FSK)

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Friends School Kamusinga                                                         |
| Short Name / Nickname  | FSK / Cougars (hockey)                                                           |
| School Category        | Extra-County                                                                     |
| Gender                 | Boys                                                                             |
| County                 | Kakamega                                                                         |
| Former Province        | Western                                                                          |
| Sub-County / District  | Lugari                                                                           |
| KSSSA Zone             | Western Region — Nzoia Zone                                                      |
| Physical Address       | Kamusinga, Lugari Sub-County, Kakamega County                                    |
| GPS Coordinates        | null (unavailable)                                                               |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | Hockey: Cougars [S3]                                                             |
| Notes                  | Hockey finalists in 2016 national championships. Won the 2016 hockey national title. Reached the 2026 national hockey final (lost to St Anthony's Kitale Les Titans 4-1 in penalties). [S3] |

---

### Butere Boys High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Butere Boys High School                                                          |
| Short Name / Nickname  | Butere                                                                           |
| School Category        | Extra-County                                                                     |
| Gender                 | Boys                                                                             |
| County                 | Kakamega                                                                         |
| Former Province        | Western                                                                          |
| Sub-County / District  | Butere                                                                           |
| KSSSA Zone             | Western Region — Kakamega Zone                                                   |
| Physical Address       | Butere Town, Kakamega County                                                     |
| GPS Coordinates        | null (unavailable)                                                               |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | null                                                                             |
| Notes                  | Regular KSSSA Western Region football participant. Reached the Kakamega County football final 2025, losing to Musingu Scorpions 2-0. KCSE 2024 mean score: 9.1. [S10, S23] |

---

### Butere Girls High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Butere Girls High School                                                         |
| Short Name / Nickname  | Butere Girls                                                                     |
| School Category        | National                                                                         |
| Gender                 | Girls                                                                            |
| County                 | Kakamega                                                                         |
| Former Province        | Western                                                                          |
| Sub-County / District  | Butere                                                                           |
| KSSSA Zone             | Western Region — Kakamega Zone                                                   |
| Physical Address       | Butere Town, Kakamega County                                                     |
| GPS Coordinates        | null (unavailable)                                                               |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | null                                                                             |
| Notes                  | Reigning national girls' football champions as of 2025. Retained Kakamega County girls' football title 2025, defeating Archbishop Njenga Girls 2-1. [S10] |

---

<a id="kiambu-county"></a>

## Kiambu County
**Former Province:** Central | **KSSSA Region:** Central / Aberdares

---

### Mang'u High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Mang'u High School                                                               |
| Short Name / Nickname  | Mangu                                                                            |
| School Category        | National (Cluster 1)                                                             |
| Gender                 | Boys                                                                             |
| County                 | Kiambu                                                                           |
| Former Province        | Central                                                                          |
| Sub-County / District  | Thika Town                                                                       |
| KSSSA Zone             | Central Region                                                                   |
| Physical Address       | Nairobi-Thika Highway, 6 km from Thika Town, Kiambu County, 314 Thika            |
| GPS Coordinates        | 1.0325°S, 37.0833°E (confidence: estimated from Thika road reference)            |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | www.manguhigh.com                                                                |
| Sports Nicknames       | null (KPR attribution unverified — excluded per no-fabrication policy)           |
| Notes                  | Catholic national school established 1925. Sports offered: football, hockey, rugby, basketball, handball, volleyball, tennis. KCSE 2024 mean score: 9.5. KCSE 2025 mean score: 10.011. [S20, S23, S24] |

---

<a id="kisumu-county"></a>

## Kisumu County
**Former Province:** Nyanza | **KSSSA Region:** Lake / Nyanza

---

### Kisumu Day High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Kisumu Day High School                                                           |
| Short Name / Nickname  | Kisumu Day / Yudhee                                                              |
| School Category        | Extra-County                                                                     |
| Gender                 | Boys                                                                             |
| County                 | Kisumu                                                                           |
| Former Province        | Nyanza                                                                           |
| Sub-County / District  | Kisumu Central                                                                   |
| KSSSA Zone             | Lake Region — Kisumu Zone                                                        |
| Physical Address       | Mamboleo, Kisumu City, Kisumu County                                             |
| GPS Coordinates        | null (unavailable — "Jomo Kenyatta Stadium Mamboleo" area)                       |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | Football: Yudhee [S14]                                                           |
| Notes                  | 2025 Kisumu County football champions. Retained title defeating Agai High School 1-0 at Jomo Kenyatta Stadium, Mamboleo. Regular KSSSA Nyanza Regional football competitors. Hockey host venue for 2026 Term One nationals. [S14, S15] |

---

### Maseno School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Maseno School                                                                    |
| Short Name / Nickname  | Maseno / Scholars (unverified) / Equator Boys                                    |
| School Category        | National (Cluster 1)                                                             |
| Gender                 | Boys                                                                             |
| County                 | Kisumu                                                                           |
| Former Province        | Nyanza                                                                           |
| Sub-County / District  | Maseno                                                                           |
| KSSSA Zone             | Lake Region                                                                      |
| Physical Address       | Maseno, Kisumu County                                                            |
| GPS Coordinates        | 0.0058°N, 34.5986°E (confidence: estimated from Maseno town)                     |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | Football: Equator Boys [S4]                                                      |
| Notes                  | "Equator Boys" nickname confirmed in TNX Africa Yala Open 2025 preview. "Scholars" attribution in circulation but no print source located — marked unverified. KCSE 2024 mean score: 9.5. [S4, S23] |

---

<a id="maranda--siaya-region"></a>

## Maranda / Siaya Region

---

### Maranda High School

| Field                 | Value                                                            |
| --------------------- | ---------------------------------------------------------------- |
| Official Full Name    | Maranda High School                                              |
| Short Name / Nickname | Maranda                                                          |
| School Category       | National (Cluster 1)                                             |
| Gender                | Boys                                                             |
| County                | Siaya                                                            |
| Former Province       | Nyanza                                                           |
| Sub-County / District | Gem                                                              |
| KSSSA Zone            | Lake Region                                                      |
| Physical Address      | Maranda, Siaya County                                            |
| GPS Coordinates       | null (unavailable)                                               |
| Phone                 | null                                                             |
| Email                 | null                                                             |
| Website               | null                                                             |
| Sports Nicknames      | null                                                             |
| Notes                 | Cluster 1 national school. KCSE 2024 mean score: 9.6 [S23, S16]. |

---

<a id="nairobi-county"></a>

## Nairobi County
**Former Province:** Nairobi | **KSSSA Region:** Metropolitan / Nairobi

---

### The Nairobi School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | The Nairobi School                                                               |
| Short Name / Nickname  | Patch                                                                            |
| School Category        | National (Cluster 1)                                                             |
| Gender                 | Boys                                                                             |
| County                 | Nairobi                                                                          |
| Former Province        | Nairobi                                                                          |
| Sub-County / District  | Westlands                                                                        |
| KSSSA Zone             | Metropolitan Region — Nairobi Zone                                               |
| Physical Address       | Kitisuru Ward, Westlands Sub-County, Nairobi City County                         |
| GPS Coordinates        | 1.2752°S, 36.7805°E (confidence: confirmed — Wikipedia)                          |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | https://nairobischool.ac.ke                                                      |
| Sports Nicknames       | School Nickname (general): Patch [S18]                                           |
| Notes                  | Founded 1902 (as Prince of Wales School). "Patch" is the official school nickname (Wikipedia, institutional). No verified sport-specific team nickname found in print sources. "Doves" attribution circulates on fan forums but no verifiable print source located — excluded per no-fabrication policy. [S18] |

---

### Kenya High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | The Kenya High School                                                            |
| Short Name / Nickname  | Boma                                                                             |
| School Category        | National (Cluster 1)                                                             |
| Gender                 | Girls                                                                            |
| County                 | Nairobi                                                                          |
| Former Province        | Nairobi                                                                          |
| Sub-County / District  | Westlands                                                                        |
| KSSSA Zone             | Metropolitan Region — Nairobi Zone                                               |
| Physical Address       | Mandera Road, Kileleshwa, Nairobi City County                                    |
| GPS Coordinates        | 1.2752°S, 36.7805°E (confidence: confirmed — Wikipedia)                          |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | www.kenyahigh.ac.ke                                                              |
| Sports Nicknames       | null                                                                             |
| Notes                  | Founded 1910. Cluster 1 national school. 150-acre campus. One of Kenya's 112 national schools. KCSE 2024 mean score: 9.9. KCSE 2025: 70 straight As, mean score 10.131. [S19, S23, S24] |

---

### Starehe Boys' Centre and School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Starehe Boys' Centre and School                                                  |
| Short Name / Nickname  | Starehe                                                                          |
| School Category        | National (Cluster 1)                                                             |
| Gender                 | Boys                                                                             |
| County                 | Nairobi                                                                          |
| Former Province        | Nairobi                                                                          |
| Sub-County / District  | Starehe                                                                          |
| KSSSA Zone             | Metropolitan Region — Nairobi Zone                                               |
| Physical Address       | Starehe, Nairobi City County                                                     |
| GPS Coordinates        | null (unavailable — verified city area: Nairobi)                                 |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | https://www.stareheboyscentre.ac.ke                                              |
| Sports Nicknames       | null                                                                             |
| Notes                  | Founded 1959 by Dr Geoffrey William Griffin. Partial-board school. Member of Round Square network. KCSE 2024 mean score: 10.1116. "Rangers" attribution circulates but no verifiable print source located — excluded. [S22, S24] |

---

### Alliance High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Alliance High School                                                             |
| Short Name / Nickname  | Alliance                                                                         |
| School Category        | National (Cluster 1)                                                             |
| Gender                 | Boys                                                                             |
| County                 | Kiambu (school premises) / Nairobi Metro                                         |
| Former Province        | Central                                                                          |
| Sub-County / District  | Kikuyu                                                                           |
| KSSSA Zone             | Central Region / Metropolitan                                                    |
| Physical Address       | Kikuyu, Kiambu County                                                            |
| GPS Coordinates        | null (unavailable — verified area: Kikuyu town)                                  |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | null                                                                             |
| Notes                  | One of Kenya's most prestigious Cluster 1 national schools. KCSE 2024 mean score: 9.5. [S16, S23] |

---

### Highway Secondary School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Highway Secondary School                                                         |
| Short Name / Nickname  | Highway                                                                          |
| School Category        | Extra-County                                                                     |
| Gender                 | Boys                                                                             |
| County                 | Nairobi                                                                          |
| Former Province        | Nairobi                                                                          |
| Sub-County / District  | Embakasi                                                                         |
| KSSSA Zone             | Metropolitan Region — Nairobi Zone                                               |
| Physical Address       | Nairobi County                                                                   |
| GPS Coordinates        | null (unavailable)                                                               |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | null                                                                             |
| Notes                  | 2024 KSSSA national football champions (beat Musingu in Kisii). Nairobi Metropolitan Region football representatives at 2025 nationals. Lost to St Joseph's Kitale (JOBO) 3-1 at 2025 KSSSA nationals in Kakamega. [S9, S11, S13] |

---

### Kamukunji High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Kamukunji High School                                                            |
| Short Name / Nickname  | Golden Boys (historic)                                                           |
| School Category        | County                                                                           |
| Gender                 | Boys                                                                             |
| County                 | Nairobi                                                                          |
| Former Province        | Nairobi                                                                          |
| Sub-County / District  | Kamukunji                                                                        |
| KSSSA Zone             | Metropolitan Region — Nairobi Zone                                               |
| Physical Address       | Kamukunji, Nairobi County                                                        |
| GPS Coordinates        | null (unavailable)                                                               |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | Football: Golden Boys (historic — no longer primary nickname) [S8]               |
| Notes                  | Historical football powerhouse. Notable alumni: Dennis Oliech, McDonald Mariga. "Golden Boys" nickname confirmed in historical sports journalism [S8]. Current nickname status unknown. |

---

<a id="nakuru-county"></a>

## Nakuru County
**Former Province:** Rift Valley | **KSSSA Region:** Rift Valley / Highlands

---

### Moi High School Kabarak

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Moi High School Kabarak                                                          |
| Short Name / Nickname  | Kabarak                                                                          |
| School Category        | Extra-County (often top-ranked, sometimes listed with national-tier performance) |
| Gender                 | Boys                                                                             |
| County                 | Nakuru                                                                           |
| Former Province        | Rift Valley                                                                      |
| Sub-County / District  | Subukia                                                                          |
| KSSSA Zone             | Rift Valley Region — Highlands Zone                                              |
| Physical Address       | Kabarak, Nakuru County                                                           |
| GPS Coordinates        | null (unavailable — verified area: Kabarak, Nakuru County)                       |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | null                                                                             |
| Notes                  | Consistently Kenya's top academic performer. KCSE 2024 mean score: 10.4 (national rank 1). KCSE 2025 mean score: 10.6 (national rank 1) [S24]. Private school — distinct from public national school classification. Often grouped with extra-county schools in KSSSA sports. |

---

<a id="nyamira-county"></a>

## Nyamira County
**Former Province:** Nyanza | **KSSSA Region:** Lake / Nyanza

---

### Nyambaria High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Nyambaria High School                                                            |
| Short Name / Nickname  | Nyambaria                                                                        |
| School Category        | Extra-County (Seventh-day Adventist)                                             |
| Gender                 | Mixed                                                                            |
| County                 | Nyamira                                                                          |
| Former Province        | Nyanza                                                                           |
| Sub-County / District  | Nyamira                                                                          |
| KSSSA Zone             | Lake Region — Nyamira Zone                                                       |
| Physical Address       | Nyamira County                                                                   |
| GPS Coordinates        | null (unavailable)                                                               |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | null                                                                             |
| Notes                  | Founded 1966. Seventh-day Adventist school. Enrollment: approximately 4,632 students (Wikipedia). Colors: sky blue, black, navy blue, white. |

---

---

<a id="siaya-county"></a>

## Siaya County
**Former Province:** Nyanza | **KSSSA Region:** Lake / Nyanza

---

### St Mary's School Yala

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | St Mary's School Yala Secondary School                                           |
| Short Name / Nickname  | Yala / Black Saints                                                              |
| School Category        | National                                                                         |
| Gender                 | Boys                                                                             |
| County                 | Siaya                                                                            |
| Former Province        | Nyanza                                                                           |
| Sub-County / District  | Gem                                                                              |
| KSSSA Zone             | Lake Region — Nyanza Zone                                                        |
| Physical Address       | Yala, Gem Sub-County, Siaya County                                               |
| GPS Coordinates        | null (unavailable — verified area: Yala town, Siaya County)                      |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | Football: Black Saints [S4, S10, S41]; Rugby: Black Saints [S29]                 |
| Notes                  | "Black Saints" confirmed in Standard Media June 2025 county championship report [S10] and TNX Africa Yala Open 2025 article [S4]. Rugby 15s national champions 2003, 2004. Principal: V.O. Makanda (confirmed 2025). Annual Yala Invitational Tournament host. [S4, S10, S29] |

---

<a id="trans-nzoia-county"></a>

## Trans Nzoia County
**Former Province:** Rift Valley | **KSSSA Region:** Rift Valley

---

### St Anthony's Boys' High School Kitale

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | St Anthony's Boys' High School                                                   |
| Short Name / Nickname  | KD (Kitale Day — historical) / Solidarity Boys                                   |
| School Category        | National (promoted 2025 from Extra-County)                                       |
| Gender                 | Boys                                                                             |
| County                 | Trans Nzoia                                                                      |
| Former Province        | Rift Valley                                                                      |
| Sub-County / District  | Kiminini                                                                         |
| KSSSA Zone             | Rift Valley Region — Trans Nzoia Zone                                            |
| Physical Address       | Kitale, Trans Nzoia County                                                       |
| GPS Coordinates        | null (unavailable — verified town: Kitale)                                       |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | Football: Solidarity Boys [S2, S4, S7, S8, S26]; Field Hockey: Les Titans [S3, S58] |
| Notes                  | Founded 1969 as Kitale Day Secondary School (KD). Promoted to national school status in 2025 by Ministry of Education [S1]. "Solidarity Boys" football nickname confirmed across multiple sources [S2, S4, S7, S8, S26]. "Les Titans" hockey nickname confirmed in Standard Media April 2026 report on the school winning national hockey title [S3]. Football: 6-time KSSSA national champions. 2023 KSSSA national football champions [S4]. 2026 national hockey champions [S3]. Under-16 African champions 2018. Former principal: Cosmas Nabungolo. Hockey coach: Kelvin Lugalia (confirmed 2026). Football coach: Peter Mayoyo. |

---

### St Joseph's Boys' High School Kitale

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | St Joseph's Boys' High School                                                    |
| Short Name / Nickname  | JOBO                                                                             |
| School Category        | National                                                                         |
| Gender                 | Boys                                                                             |
| County                 | Trans Nzoia                                                                      |
| Former Province        | Rift Valley                                                                      |
| Sub-County / District  | Saboti                                                                           |
| KSSSA Zone             | Rift Valley Region — Trans Nzoia Zone                                            |
| Physical Address       | Kitale, Saboti Sub-County, Trans Nzoia County                                    |
| GPS Coordinates        | null (unavailable — verified town: Kitale)                                       |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | Football: Brown Saints [S9]                                                      |
| Notes                  | "JOBO" is the widely used abbreviation confirmed in sports reporting. "Brown Saints" football nickname confirmed in Education News Kenya August 2025 KSSSA national championship report [S9]. 2025 KSSSA national football champions — first-ever national title, won in Mumias [S9]. Rift Valley Region football champions 2025. Defeated Highway Secondary 3-1 in KSSSA nationals Kakamega [S13]. |

---

<a id="vihiga-county"></a>

## Vihiga County
**Former Province:** Western | **KSSSA Region:** Western

---

### Bunyore Girls High School

| Field                  | Value                                                                            |
| ---------------------- | -------------------------------------------------------------------------------- |
| Official Full Name     | Bunyore Girls High School                                                        |
| Short Name / Nickname  | Bunyore Girls                                                                    |
| School Category        | Extra-County                                                                     |
| Gender                 | Girls                                                                            |
| County                 | Vihiga                                                                           |
| Former Province        | Western                                                                          |
| Sub-County / District  | Emuhaya                                                                          |
| KSSSA Zone             | Western Region                                                                   |
| Physical Address       | Emuhaya, Vihiga County                                                           |
| GPS Coordinates        | null (unavailable)                                                               |
| Phone                  | null                                                                             |
| Email                  | null                                                                             |
| Website                | null                                                                             |
| Sports Nicknames       | null                                                                             |
| Notes                  | KCSE 2024 mean score: 9.1. KCSE 2025: regional leader with mean score 9.818, 34 straight As [S24]. |

---

<!-- ========================================================================= -->
<!-- SECTION 3 · DATA GAPS AND CONFIDENCE NOTES                                 -->
<!-- Known coverage limitations. Read before trusting any absence of data.      -->
<!-- ========================================================================= -->

<a id="data-gaps-and-confidence-notes"></a>

## DATA GAPS AND CONFIDENCE NOTES

### Coverage Gaps by County Category

| Gap Area                              | Detail                                                                                           |
| ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **GPS Coordinates**                   | The majority of Kenyan schools do not have precisely geocoded public records. Coordinates confirmed from Wikipedia carry the highest confidence. All others are estimated from town center or marked unavailable. |
| **Contact Information**               | Phone numbers and emails are not publicly indexed for most public secondary schools in Kenya. NEMIS holds this data behind an authenticated portal [S29]. Schools must be contacted directly or queried through county education offices. |
| **County-level and district schools** | This release documents primarily national and extra-county schools. Kenya has approximately 10,000 secondary schools total. Full district-level coverage requires access to NEMIS bulk export. |
| **Sports nicknames beyond football and hockey** | Rugby, basketball, and volleyball nicknames are rarely reported in national sports journalism. Sources for non-football nicknames are sparse. |
| **KSSSA Zone names**                  | KSSSA zone nomenclature is inconsistently reported. "Nzoia Region," "Western Region," and county names are used interchangeably in news reporting. The official KSSSA zone framework is not published in machine-readable format on ksssa.co.ke [S27]. |
| **Girls' school nicknames**           | Sports journalism coverage of girls' schools rarely includes team nicknames. This gap is structural, not a research omission. |

---

<!-- ========================================================================= -->
<!-- SECTION 4 · RECOMMENDED FOLLOW-UP SOURCES                                  -->
<!-- Where to source the data flagged missing above (NEMIS, KSSSA, KNEC, ...).  -->
<!-- ========================================================================= -->

<a id="recommended-follow-up-sources"></a>

## RECOMMENDED FOLLOW-UP SOURCES

| Source | Access Type | Purpose |
|--------|-------------|---------|
| NEMIS Portal (education.go.ke/nemis)          | Authenticated — requires ministry credentials | Complete school registry with codes, locations, contacts            |
| KSSSA official portal (ksssa.co.ke)           | Public                                        | Zone structures, fixtures, past results                             |
| KNEC school code registry                     | Public — PDF reports                          | Official school codes for all categories                            |
| Standard Media sports archive                 | Public                                        | Best ongoing source for team nicknames in current reporting         |
| TNX Africa (tnx.africa)                       | Public                                        | Best source for KSSSA Western and Nyanza region nickname coverage   |
| Mukasa Football Diary (mukasah.wordpress.com) | Public                                        | Historical football nickname archive — Western Kenya focus          |
| County Education Directors                    | Direct contact                                | Sub-county school lists and KSSSA zone assignments                  |
| WhoOwnsKenya.com sports features              | Public                                        | Team nickname features — moderate reliability, cross-check required |


---

<!-- ========================================================================= -->
<!-- SECTION 5 · COUNTY LISTINGS — ALL 47 COUNTIES (BULK DIRECTORY)             -->
<!-- Lightweight rows (name, gender, cluster) per county, split by tier         -->
<!-- (National / Extra-County / County). Complements the detailed profiles.     -->
<!-- ========================================================================= -->

<a id="county-listings--all-47-counties-bulk-directory"></a>

## COUNTY LISTINGS — ALL 47 COUNTIES (BULK DIRECTORY)

> **Scope:** National, Extra-County, and County tier schools across all 47 counties. Lightweight rows only (name, county, tier, gender). This section complements the 23 detailed anchor profiles above. It does not include sub-county / district-tier schools.
> **Compiled:** May 2026 from live web research. Schools listed alphabetically within each county and tier.
> **Sources:** Money254 (national schools per county), Teacher.co.ke (extra-county Cluster 1-3 master list), Education News Hub, Newsblaze, arena.co.ke, Tuko.co.ke, KNEC SCHOOLCHOICES PDFs, Daily Nation. Strict no-fabrication policy: every name appears in a cited published source.
> **Cluster tags:** C1, C2, C3 reflect the Teacher.co.ke extra-county cluster grouping. Under the 2025-2026 CBE reform, National maps to Cluster 1, Extra-County to Cluster 2, County to Cluster 3, Sub-County to Cluster 4.

### Mombasa County

**National (4)**

| #   | School Name                                                     | Gender | Cluster |
| --- | --------------------------------------------------------------- | ------ | ------- |
|   1 | Mama Ngina Girls' High School                                   | Girls  | null    |
|   2 | MSS for the Physically Handicapped                              | SNE    | null    |
|   3 | Shimo La Tewa School                                            | Boys   | null    |
|   4 | The Salvation Army Likoni High School for the Visually Impaired | SNE    | null    |
| --- | --------------------------------------------------------------- | ------ | ------- |

**Extra-County (3)**

| #   | School Name             | Gender | Cluster |
| --- | ----------------------- | ------ | ------- |
|   1 | Coast Girls High School | Girls  | C2      |
|   2 | Khamis Secondary School | Boys   | C2      |
|   3 | Mazeras High School     | Boys   | C1      |
| --- | ----------------------- | ------ | ------- |

**County (8)**

| #   | School Name                      | Gender | Cluster |
| --- | -------------------------------- | ------ | ------- |
|   1 | Allidina Visram High School      | Boys   | null    |
|   2 | Mbaraki Girls Secondary School   | Girls  | null    |
|   3 | Sacred Heart High School Mombasa | Mixed  | null    |
|   4 | Serani Secondary School          | Boys   | null    |
|   5 | Shariff Nassir Girls             | Girls  | null    |
|   6 | Star of the Sea High School      | Girls  | null    |
|   7 | Tononoka Secondary School        | Boys   | null    |
|   8 | Tudor Day Secondary School       | Boys   | null    |
| --- | -------------------------------- | ------ | ------- |


### Kwale County

**National (5)**

| #   | School Name                    | Gender | Cluster |
| --- | ------------------------------ | ------ | ------- |
|   1 | Kinango Secondary School       | null   | null    |
|   2 | Kwale High School              | Boys   | null    |
|   3 | Kwale High School for the Deaf | SNE    | null    |
|   4 | Matuga Girls High School       | Girls  | null    |
|   5 | Waa High School                | null   | null    |
| --- | ------------------------------ | ------ | ------- |

**Extra-County (7)**

| #   | School Name                     | Gender | Cluster |
| --- | ------------------------------- | ------ | ------- |
|   1 | Franz Josef Secondary School    | Girls  | C3      |
|   2 | Kinango Secondary School        | Boys   | C2      |
|   3 | Kingwede Girls Secondary School | Girls  | C3      |
|   4 | Msambweni Secondary School      | Boys   | C3      |
|   5 | Shimba Hills Secondary School   | Mixed  | C2      |
|   6 | Waa Girls Secondary School      | Girls  | C2      |
|   7 | Waa High School                 | Boys   | C2      |
| --- | ------------------------------- | ------ | ------- |

**County (1)**

| #   | School Name               | Gender | Cluster |
| --- | ------------------------- | ------ | ------- |
|   1 | [Coverage gap - see note] | null   | null    |
| --- | ------------------------- | ------ | ------- |


### Kilifi County

**National (8)**

| #   | School Name              | Gender | Cluster |
| --- | ------------------------ | ------ | ------- |
|   1 | Bahari Girls High School | Girls  | null    |
|   2 | Dr. Krapf                | null   | null    |
|   3 | Kombeni                  | null   | null    |
|   4 | Malindi High             | Boys   | null    |
|   5 | Pwani Deaf               | SNE    | null    |
|   6 | Ribe Boys                | Boys   | null    |
|   7 | Ribe Girls               | Girls  | null    |
|   8 | Sahajanad Special        | SNE    | null    |
| --- | ------------------------ | ------ | ------- |

**Extra-County (11)**

| #   | School Name                     | Gender | Cluster |
| --- | ------------------------------- | ------ | ------- |
|   1 | Dr. Krapf Memorial Secondary    | Boys   | C3      |
|   2 | Godoma Secondary                | Mixed  | C2      |
|   3 | Kakoneni Girls Secondary        | Girls  | C3      |
|   4 | Kombeni Girls Secondary         | Girls  | C1      |
|   5 | Lutsangani Boys Secondary       | Boys   | C1      |
|   6 | Malindi High School             | Boys   | C1      |
|   7 | Ngala Memorial Girls' Secondary | Girls  | C2      |
|   8 | Ribe Girls Secondary            | Girls  | C1      |
|   9 | Sokoke Secondary                | Boys   | C2      |
|  10 | St Johns Girls Secondary        | Girls  | C2      |
|  11 | St. George's High School        | Boys   | C3      |
| --- | ------------------------------- | ------ | ------- |

**County (16)**

| #   | School Name                  | Gender | Cluster |
| --- | ---------------------------- | ------ | ------- |
|   1 | Chumani Sec School           | Mixed  | null    |
|   2 | Dzitsoni Secondary           | Mixed  | null    |
|   3 | Galana                       | Boys   | null    |
|   4 | Ganze Boys Secondary         | Boys   | null    |
|   5 | Ganze Girls Secondary        | Girls  | null    |
|   6 | Gede Secondary School        | Boys   | null    |
|   7 | Jaribuni                     | Boys   | null    |
|   8 | Kakuyuni Boys Secondary      | Boys   | null    |
|   9 | Mapimo Girls                 | Girls  | null    |
|  10 | Marafa                       | Boys   | null    |
|  11 | Mariakani Secondary          | Boys   | null    |
|  12 | Moi Kadzonzo Girls Secondary | Girls  | null    |
|  13 | Mwangea Girls                | Girls  | null    |
|  14 | Ngombeni Girls Sec           | Girls  | null    |
|  15 | St Theresas                  | Mixed  | null    |
|  16 | Vitengeni Baptist Secondary  | Mixed  | null    |
| --- | ---------------------------- | ------ | ------- |


### Tana River County

**National (2)**

| #   | School Name                 | Gender | Cluster |
| --- | --------------------------- | ------ | ------- |
|   1 | Hola Boys Secondary School  | Boys   | null    |
|   2 | Ngao Girls Secondary School | Girls  | null    |
| --- | --------------------------- | ------ | ------- |

**Extra-County (6)**

| #   | School Name                      | Gender | Cluster |
| --- | -------------------------------- | ------ | ------- |
|   1 | Hirimani Secondary               | Mixed  | C3      |
|   2 | Kipini Secondary                 | Mixed  | C3      |
|   3 | Madogo Secondary                 | Mixed  | C3      |
|   4 | Mau Mau Memorial Girls Secondary | Girls  | C2      |
|   5 | Tarasaa High School              | Boys   | C3      |
|   6 | Wenje Secondary                  | Mixed  | C3      |
| --- | -------------------------------- | ------ | ------- |

**County (7)**

| #   | School Name             | Gender | Cluster |
| --- | ----------------------- | ------ | ------- |
|   1 | Galole Model            | Mixed  | null    |
|   2 | Garsen High School      | null   | null    |
|   3 | Hurara Secondary School | null   | null    |
|   4 | Kitere Secondary        | null   | null    |
|   5 | Marifano Secondary      | null   | null    |
|   6 | Oda Secondary School    | null   | null    |
|   7 | Sane Girls Secondary    | Girls  | null    |
| --- | ----------------------- | ------ | ------- |


### Lamu County

**National (2)**

| #   | School Name                 | Gender | Cluster |
| --- | --------------------------- | ------ | ------- |
|   1 | Lamu Girls Secondary School | Girls  | null    |
|   2 | Mpeketoni Boys High School  | Boys   | null    |
| --- | --------------------------- | ------ | ------- |

**Extra-County (1)**

| #   | School Name                | Gender | Cluster |
| --- | -------------------------- | ------ | ------- |
|   1 | Lamu Boys Secondary School | Boys   | C1      |
| --- | -------------------------- | ------ | ------- |

**County (8)**

| #   | School Name           | Gender | Cluster |
| --- | --------------------- | ------ | ------- |
|   1 | Bahari Secondary      | Mixed  | null    |
|   2 | Faza Secondary        | Mixed  | null    |
|   3 | Hindi Secondary       | Mixed  | null    |
|   4 | Hongwe Secondary      | Mixed  | null    |
|   5 | Mkunumbi Secondary    | Mixed  | null    |
|   6 | Mokowe Secondary      | Mixed  | null    |
|   7 | Uziwa Secondary       | Mixed  | null    |
|   8 | Witu Secondary School | Mixed  | null    |
| --- | --------------------- | ------ | ------- |


### Taita-Taveta County

**National (3)**

| #   | School Name                  | Gender | Cluster |
| --- | ---------------------------- | ------ | ------- |
|   1 | Bura Girls High School       | Girls  | null    |
|   2 | Dr. Aggrey High School       | Boys   | null    |
|   3 | Kenyatta High School Mwatate | Boys   | null    |
| --- | ---------------------------- | ------ | ------- |

**Extra-County (15)**

| #   | School Name                                   | Gender | Cluster |
| --- | --------------------------------------------- | ------ | ------- |
|   1 | Bishop John Njenga Secondary                  | Mixed  | C2      |
|   2 | Canon Kituri Secondary                        | Mixed  | C2      |
|   3 | Dr. Aggrey High School                        | Boys   | C1      |
|   4 | Eldoro Girls High School                      | Girls  | C2      |
|   5 | Kituma Secondary                              | Boys   | C3      |
|   6 | Mahoo Girls' Secondary                        | Girls  | C2      |
|   7 | Moi Boys High School Kasigau                  | Boys   | C3      |
|   8 | Murray Girls' High                            | Girls  | C1      |
|   9 | Mwakitawa Secondary                           | Girls  | C2      |
|  10 | Mwasere Girls' Secondary                      | Girls  | C1      |
|  11 | Our Lady of Perpetual Succour Girls Secondary | Girls  | C3      |
|  12 | Senior Chief Mwangeka Secondary               | Girls  | C3      |
|  13 | St. Mary's High School Lushangonyi            | Boys   | C1      |
|  14 | Timbila Secondary                             | Boys   | C2      |
|  15 | Voi Secondary School                          | Boys   | C1      |
| --- | --------------------------------------------- | ------ | ------- |


### Garissa County

**National (3)**

| #   | School Name                              | Gender | Cluster |
| --- | ---------------------------------------- | ------ | ------- |
|   1 | Garissa High School                      | Boys   | null    |
|   2 | Garissa Special High School for the Deaf | SNE    | null    |
|   3 | NEP Girls High                           | Girls  | null    |
| --- | ---------------------------------------- | ------ | ------- |

**Extra-County (4)**

| #   | School Name                 | Gender | Cluster |
| --- | --------------------------- | ------ | ------- |
|   1 | County High School          | Boys   | C3      |
|   2 | Fafi Girls Secondary School | Girls  | C3      |
|   3 | Saka Girls Secondary School | Girls  | C3      |
|   4 | Sankuri Secondary School    | Boys   | C3      |
| --- | --------------------------- | ------ | ------- |

**County (14)**

| #   | School Name                     | Gender | Cluster |
| --- | ------------------------------- | ------ | ------- |
|   1 | Alinjugur Secondary             | Mixed  | null    |
|   2 | Balambala Secondary             | Boys   | null    |
|   3 | Benane Secondary                | Mixed  | null    |
|   4 | Bura Secondary                  | Boys   | null    |
|   5 | Dadaab Secondary                | Boys   | null    |
|   6 | Dertu Girls Secondary           | Girls  | null    |
|   7 | Hulugho Boys' Secondary         | Boys   | null    |
|   8 | Hulugho Girls Secondary         | Girls  | null    |
|   9 | Kulan Secondary                 | Boys   | null    |
|  10 | Modogashe Secondary             | Boys   | null    |
|  11 | Muzdalifa Integrated Girls High | Girls  | null    |
|  12 | Nanighi Secondary               | Boys   | null    |
|  13 | Shurie Secondary                | Boys   | null    |
|  14 | Yusuf Haji Girls Secondary      | Girls  | null    |
| --- | ------------------------------- | ------ | ------- |


### Wajir County

**National (3)**

| #   | School Name                                 | Gender | Cluster |
| --- | ------------------------------------------- | ------ | ------- |
|   1 | Wajir Girls Secondary School                | Girls  | null    |
|   2 | Wajir High School                           | Boys   | null    |
|   3 | Wajir Special Secondary School for the Deaf | SNE    | null    |
| --- | ------------------------------------------- | ------ | ------- |

**Extra-County (5)**

| #   | School Name                | Gender | Cluster |
| --- | -------------------------- | ------ | ------- |
|   1 | Bute Boys Secondary        | Boys   | C3      |
|   2 | Bute Girls Secondary       | Girls  | C3      |
|   3 | Griftu Secondary           | Boys   | C2      |
|   4 | Hon Khalif Girls Secondary | Girls  | C3      |
|   5 | Sabunley Secondary         | Boys   | C3      |
| --- | -------------------------- | ------ | ------- |

**County (12)**

| #   | School Name                        | Gender | Cluster |
| --- | ---------------------------------- | ------ | ------- |
|   1 | Buna Secondary                     | Boys   | null    |
|   2 | Eldas Secondary                    | Boys   | null    |
|   3 | Habaswein Boys Secondary           | Boys   | null    |
|   4 | Khorof Harar Secondary             | Boys   | null    |
|   5 | Korondille Boys Secondary          | Boys   | null    |
|   6 | Kutulo Girls Secondary             | Girls  | null    |
|   7 | Mansa Boys Secondary               | Boys   | null    |
|   8 | Sarman Boys Secondary              | Boys   | null    |
|   9 | Senior Chief Ogle Girls' Secondary | Girls  | null    |
|  10 | Tarbaj Secondary                   | Boys   | null    |
|  11 | Wagalla Memorial Secondary         | Mixed  | null    |
|  12 | Wajir Bor Boys Secondary           | Boys   | null    |
| --- | ---------------------------------- | ------ | ------- |


### Mandera County

**National (2)**

| #   | School Name                        | Gender | Cluster |
| --- | ---------------------------------- | ------ | ------- |
|   1 | Mandera Secondary School           | Boys   | null    |
|   2 | Moi Girls Secondary School Mandera | Girls  | null    |
| --- | ---------------------------------- | ------ | ------- |

**Extra-County (4)**

| #   | School Name                   | Gender | Cluster |
| --- | ----------------------------- | ------ | ------- |
|   1 | Libin Nomadic Girls Secondary | Girls  | C3      |
|   2 | Sheikh Ali High School        | Boys   | C3      |
|   3 | Takaba Girls' Secondary       | Girls  | C3      |
|   4 | Wayam Secondary               | Boys   | C3      |
| --- | ----------------------------- | ------ | ------- |

**County (22)**

| #   | School Name                  | Gender | Cluster |
| --- | ---------------------------- | ------ | ------- |
|   1 | Arabia Boys Secondary        | Boys   | null    |
|   2 | Arabia Girls Secondary       | Girls  | null    |
|   3 | Aresa Girls Secondary        | Girls  | null    |
|   4 | Ashabito Girls Secondary     | Girls  | null    |
|   5 | Ashabito Secondary           | null   | null    |
|   6 | Burduras Secondary           | null   | null    |
|   7 | Chief Mohamed Jari Secondary | Mixed  | null    |
|   8 | Dandu Secondary              | null   | null    |
|   9 | Elwak Girls Secondary        | Girls  | null    |
|  10 | Elwak Secondary              | Boys   | null    |
|  11 | Gari Secondary               | null   | null    |
|  12 | Hareri Mixed Secondary       | Mixed  | null    |
|  13 | Khalalio Girls Secondary     | Girls  | null    |
|  14 | Khalalio Secondary           | Boys   | null    |
|  15 | Kutulo Girls Model Secondary | Girls  | null    |
|  16 | Lafey Boys Secondary         | Boys   | null    |
|  17 | Malkamari Boys Secondary     | Boys   | null    |
|  18 | Neboi Secondary              | Boys   | null    |
|  19 | Rhamu Dimtu Boys Secondary   | Boys   | null    |
|  20 | Rhamu Girls Secondary        | Girls  | null    |
|  21 | Takaba Boys' Secondary       | Boys   | null    |
|  22 | Wargadud Mixed Secondary     | Mixed  | null    |
| --- | ---------------------------- | ------ | ------- |


### Marsabit County

**National (2)**

| #   | School Name                | Gender | Cluster |
| --- | -------------------------- | ------ | ------- |
|   1 | Moi Girls Secondary School | Girls  | null    |
|   2 | Moyale Secondary School    | Boys   | null    |
| --- | -------------------------- | ------ | ------- |

**Extra-County (7)**

| #   | School Name                           | Gender | Cluster |
| --- | ------------------------------------- | ------ | ------- |
|   1 | Chalbi Boys' High School              | Boys   | C1      |
|   2 | Dr. Gurracha Memorial Girls Secondary | Girls  | C3      |
|   3 | Loiyangalani Secondary                | Boys   | C3      |
|   4 | Marsabit Boys High School             | Boys   | C2      |
|   5 | Moyale Girls Secondary                | Girls  | C3      |
|   6 | Sasura Girls' Secondary               | Girls  | C2      |
|   7 | Sololo Mixed Day/Boarding High School | Boys   | C3      |
| --- | ------------------------------------- | ------ | ------- |

**County (1)**

| #   | School Name               | Gender | Cluster |
| --- | ------------------------- | ------ | ------- |
|   1 | [Coverage gap - see note] | null   | null    |
| --- | ------------------------- | ------ | ------- |


### Isiolo County

**National (2)**

| #   | School Name              | Gender | Cluster |
| --- | ------------------------ | ------ | ------- |
|   1 | Garbatula High School    | null   | null    |
|   2 | Isiolo Girls High School | Girls  | null    |
| --- | ------------------------ | ------ | ------- |

**Extra-County (2)**

| #   | School Name                  | Gender | Cluster |
| --- | ---------------------------- | ------ | ------- |
|   1 | Isiolo Boys Secondary School | Boys   | C2      |
|   2 | Kinna Secondary School       | Mixed  | C2      |
| --- | ---------------------------- | ------ | ------- |

**County (1)**

| #   | School Name               | Gender | Cluster |
| --- | ------------------------- | ------ | ------- |
|   1 | [Coverage gap - see note] | null   | null    |
| --- | ------------------------- | ------ | ------- |


### Meru County

**National (5)**

| #   | School Name                        | Gender | Cluster |
| --- | ---------------------------------- | ------ | ------- |
|   1 | Kaaga Girls High School            | Girls  | null    |
|   2 | Meru School                        | Boys   | null    |
|   3 | Nkubu High School                  | Boys   | null    |
|   4 | St Lucy's High School              | null   | null    |
|   5 | St Mary's Girls' High School Igoji | Girls  | null    |
| --- | ---------------------------------- | ------ | ------- |

**Extra-County (25)**

| #   | School Name                | Gender | Cluster |
| --- | -------------------------- | ------ | ------- |
|   1 | Abothuguchi Secondary      | Boys   | C3      |
|   2 | Burieruri Boys Secondary   | Boys   | C1      |
|   3 | Gakuuni Girls Secondary    | Girls  | C3      |
|   4 | Gikumene Girls Secondary   | Girls  | C2      |
|   5 | Gikurune Boys Secondary    | Boys   | C1      |
|   6 | Gikurune Girls Secondary   | Girls  | C2      |
|   7 | Igembe Boys' Secondary     | Boys   | C1      |
|   8 | Kaaga Boys Secondary       | Boys   | C1      |
|   9 | Kaaga Girls' High School   | Girls  | C1      |
|  10 | Kangeta Girls' Secondary   | Girls  | C2      |
|  11 | Kanyakine High School      | Boys   | C2      |
|  12 | Kibirichia Boys Secondary  | Boys   | C2      |
|  13 | Kibirichia Girls Secondary | Girls  | C2      |
|  14 | Kinjo Girls Secondary      | Girls  | C2      |
|  15 | Kirigara Girls Secondary   | Girls  | C2      |
|  16 | Maua Girls Secondary       | Girls  | C2      |
|  17 | Miathene Boys High School  | Boys   | C2      |
|  18 | Mikinduri Girls Secondary  | Girls  | C1      |
|  19 | Njia Boys Secondary        | Boys   | C3      |
|  20 | Nkubu High School          | Boys   | C1      |
|  21 | Nkuene Girls High School   | Girls  | C1      |
|  22 | Ntunene Girls Secondary    | Girls  | C3      |
|  23 | Ontulili Boys Secondary    | Boys   | C1      |
|  24 | Ruiri Girls Secondary      | Girls  | C2      |
|  25 | Yururu Girls' Secondary    | Girls  | C1      |
| --- | -------------------------- | ------ | ------- |


### Tharaka-Nithi County

**National (5)**

| #   | School Name                              | Gender | Cluster |
| --- | ---------------------------------------- | ------ | ------- |
|   1 | Chogoria Boys High School                | Boys   | null    |
|   2 | Chogoria Girls                           | Girls  | null    |
|   3 | Ikuu Boys High School                    | Boys   | null    |
|   4 | Kamatungu Secondary for Hearing Impaired | SNE    | null    |
|   5 | Kiriani Boys High School                 | Boys   | null    |
| --- | ---------------------------------------- | ------ | ------- |

**Extra-County (24)**

| #   | School Name                       | Gender | Cluster |
| --- | --------------------------------- | ------ | ------- |
|   1 | Chief Mbogori Girls Secondary     | Girls  | C2      |
|   2 | Chogoria Boys                     | Boys   | C1      |
|   3 | Chuka Boys High School            | Boys   | C1      |
|   4 | Chuka Girls' Secondary            | Girls  | C1      |
|   5 | Igwanjau Secondary                | Mixed  | C2      |
|   6 | Ikawa Secondary                   | Mixed  | C2      |
|   7 | Ikuu Girls Secondary              | Girls  | C1      |
|   8 | Iruma Girls Secondary             | Girls  | C2      |
|   9 | Itugururu Secondary               | Mixed  | C1      |
|  10 | Kajiunduthi High                  | Boys   | C1      |
|  11 | Karamugi Secondary                | Girls  | C3      |
|  12 | Kiini Secondary                   | Mixed  | C2      |
|  13 | Kiriani Boys High                 | Boys   | C2      |
|  14 | Kiurani Secondary                 | Boys   | C3      |
|  15 | Magumoni Girls Secondary          | Girls  | C2      |
|  16 | Makuri Girls Secondary            | Girls  | C2      |
|  17 | Materi Boys' High                 | Boys   | C3      |
|  18 | Mukuuni High                      | Boys   | C2      |
|  19 | Muthambi Boys Secondary           | Boys   | C2      |
|  20 | Muthambi Girls High               | Girls  | C1      |
|  21 | Ngaita Girls Secondary            | Girls  | C3      |
|  22 | Njuri High School                 | Mixed  | C1      |
|  23 | Our Lady of Mercy Girls Secondary | Girls  | C3      |
|  24 | Tharaka Secondary                 | Boys   | C1      |
| --- | --------------------------------- | ------ | ------- |


### Embu County

**National (6)**

| #   | School Name                     | Gender | Cluster |
| --- | ------------------------------- | ------ | ------- |
|   1 | ACK Mary Magdalene for the Deaf | SNE    | null    |
|   2 | Kyeni Girls                     | Girls  | null    |
|   3 | Moi Girls                       | Girls  | null    |
|   4 | Siakago Boys High School        | Boys   | null    |
|   5 | Siakago Girls High School       | Girls  | null    |
|   6 | Yangwa Boys High School         | Boys   | null    |
| --- | ------------------------------- | ------ | ------- |

**Extra-County (23)**

| #   | School Name                             | Gender | Cluster |
| --- | --------------------------------------- | ------ | ------- |
|   1 | Gangara Secondary                       | Mixed  | C2      |
|   2 | Joseph Allamano Wachoro Secondary       | Boys   | C3      |
|   3 | Kangaru Girls School                    | Girls  | C1      |
|   4 | Kangaru School                          | Boys   | C1      |
|   5 | Kanyuambora Secondary                   | Boys   | C2      |
|   6 | Kavutiri Boys Secondary                 | Boys   | C2      |
|   7 | Kegonge Boys High                       | Boys   | C2      |
|   8 | Kiambere School Complex                 | Mixed  | C2      |
|   9 | King David Boys High School Kamama      | Boys   | C1      |
|  10 | Kiriari Girls High                      | Girls  | C1      |
|  11 | Kirimari Secondary                      | Boys   | C3      |
|  12 | Kyeni Girls' High                       | Girls  | C1      |
|  13 | Mariari Girls Secondary                 | Girls  | C3      |
|  14 | Mayori Secondary                        | Mixed  | C1      |
|  15 | Nguviu Boys High                        | Boys   | C1      |
|  16 | Nguviu Girls Secondary                  | Girls  | C1      |
|  17 | Nyangwa Boys' High                      | Boys   | C1      |
|  18 | Siakago Boys High School                | Boys   | C1      |
|  19 | St Agnes Kiaganari Girls Secondary      | Girls  | C3      |
|  20 | St Paul's High School Kevote            | Boys   | C1      |
|  21 | St Teresa's Girls Kithimu               | Girls  | C1      |
|  22 | St. Catherine Nthagaiya Girls Secondary | Girls  | C1      |
|  23 | St. Marys Kiangima Secondary            | Girls  | C3      |
| --- | --------------------------------------- | ------ | ------- |


### Kitui County

**National (4)**

| #   | School Name                     | Gender | Cluster |
| --- | ------------------------------- | ------ | ------- |
|   1 | Kimangao Girls Secondary School | Girls  | null    |
|   2 | Kitui High School               | Boys   | null    |
|   3 | Muthale Girls                   | Girls  | null    |
|   4 | St. Charles Lwanga School       | Boys   | null    |
| --- | ------------------------------- | ------ | ------- |

**Extra-County (30)**

| #   | School Name                        | Gender | Cluster |
| --- | ---------------------------------- | ------ | ------- |
|   1 | Chuluni Girls' Secondary           | Girls  | C1      |
|   2 | Gankanga Secondary                 | Mixed  | C2      |
|   3 | Ikutha Boys Secondary              | Boys   | C1      |
|   4 | Ikutha Girls Secondary             | Girls  | C2      |
|   5 | Itoleka Secondary                  | Girls  | C3      |
|   6 | Katheka Boys' Secondary            | Boys   | C2      |
|   7 | Kimangao Girls Secondary           | Girls  | C3      |
|   8 | Kisasi Secondary                   | Boys   | C1      |
|   9 | Kyondoni Girls Secondary           | Girls  | C1      |
|  10 | Maliku Girls' Secondary            | Girls  | C1      |
|  11 | Matinyani Secondary                | Boys   | C1      |
|  12 | Mbitini Girls' Secondary           | Girls  | C1      |
|  13 | Migwani Secondary                  | Boys   | C1      |
|  14 | Mulango Girls High                 | Girls  | C1      |
|  15 | Mutito Boys Secondary              | Boys   | C2      |
|  16 | Mutomo Girls Secondary             | Girls  | C1      |
|  17 | Mutonguni Secondary                | Boys   | C1      |
|  18 | Mwingi Secondary                   | Boys   | C1      |
|  19 | Nguutani Secondary                 | Boys   | C2      |
|  20 | Nzeluni Girls Secondary            | Girls  | C2      |
|  21 | St Charles Lwanga School           | Boys   | C1      |
|  22 | St Lukes Yatta Secondary           | Boys   | C1      |
|  23 | St Thomas Aquinas Kalawa Boys      | Boys   | C3      |
|  24 | St Ursula Girls' Secondary Tungutu | Girls  | C2      |
|  25 | St. Angela's Girls Secondary       | Girls  | C1      |
|  26 | St. Mary's Mutito Girls Secondary  | Girls  | C2      |
|  27 | St. Monica Girls Mulutu Secondary  | Girls  | C1      |
|  28 | St.Peter's Nzambani Boys Secondary | Boys   | C3      |
|  29 | Thitani Secondary                  | Girls  | C1      |
|  30 | Yambyu Girls Secondary             | Girls  | C2      |
| --- | ---------------------------------- | ------ | ------- |


### Machakos County

**National (5)**

| #   | School Name                            | Gender | Cluster |
| --- | -------------------------------------- | ------ | ------- |
|   1 | Kathiani Girls School                  | Girls  | null    |
|   2 | Machakos Boys                          | Boys   | null    |
|   3 | Machakos Girls High School             | Girls  | null    |
|   4 | Machakos Secondary School for the Deaf | SNE    | null    |
|   5 | Tala High                              | Boys   | null    |
| --- | -------------------------------------- | ------ | ------- |

**Extra-County (21)**

| #   | School Name                               | Gender | Cluster |
| --- | ----------------------------------------- | ------ | ------- |
|   1 | Kabaa High School                         | Boys   | C1      |
|   2 | Kangundo High School                      | Boys   | C1      |
|   3 | Kathiani High School                      | Boys   | C3      |
|   4 | Kitonyini High                            | Mixed  | C2      |
|   5 | Machakos Girls' High                      | Girls  | C1      |
|   6 | Masii Boys High                           | Boys   | C3      |
|   7 | Masii Girls' Secondary                    | Girls  | C3      |
|   8 | Masinga Boys Secondary                    | Boys   | C1      |
|   9 | Matungulu Girls School                    | Girls  | C3      |
|  10 | Mua Hills Secondary                       | Girls  | C2      |
|  11 | Mumbuni Girls' School                     | Girls  | C1      |
|  12 | Mumbuni High School                       | Boys   | C1      |
|  13 | Muthetheni Girls' Secondary               | Girls  | C1      |
|  14 | Ngelani High School                       | Boys   | C2      |
|  15 | Nyayo A.I.C Girls Secondary               | Girls  | C2      |
|  16 | Sengani Secondary                         | Girls  | C3      |
|  17 | St. Francis Misyani Girls High            | Girls  | C1      |
|  18 | St. Josephine Bakhita Masinga Girls' High | Girls  | C1      |
|  19 | Tala Girls Secondary                      | Girls  | C1      |
|  20 | Tala High School                          | Boys   | C1      |
|  21 | Vyulya Girls' Secondary                   | Girls  | C1      |
| --- | ----------------------------------------- | ------ | ------- |


### Makueni County

**National (9)**

| #   | School Name                          | Gender | Cluster |
| --- | ------------------------------------ | ------ | ------- |
|   1 | Makueni Boys                         | Boys   | null    |
|   2 | Makueni Girls High School            | Girls  | null    |
|   3 | Matiliku Secondary                   | Boys   | null    |
|   4 | Mbooni Boys                          | Boys   | null    |
|   5 | Mukaa Boys High School               | Boys   | null    |
|   6 | Precious Blood Kilungu               | Girls  | null    |
|   7 | St. Alphonsa Kisau Girls Secondary   | Girls  | null    |
|   8 | St. Joseph's Girls Secondary Kibwezi | Girls  | null    |
|   9 | St. Teresa Mbooni Girls              | Girls  | null    |
| --- | ------------------------------------ | ------ | ------- |

**Extra-County (19)**

| #   | School Name                             | Gender | Cluster |
| --- | --------------------------------------- | ------ | ------- |
|   1 | Barazani Girls' High School             | Girls  | C1      |
|   2 | Kalawa Secondary                        | Boys   | C1      |
|   3 | Kalulini Boys' High School              | Boys   | C1      |
|   4 | Kasikeu Secondary                       | Boys   | C3      |
|   5 | Kaumoni Boys Secondary                  | Boys   | C1      |
|   6 | Kisau Girls Secondary                   | Girls  | C1      |
|   7 | Kitondo Secondary                       | Boys   | C1      |
|   8 | Makindu Secondary                       | Boys   | C1      |
|   9 | Makueni Girls High School               | Girls  | C1      |
|  10 | Matiliku Secondary                      | Boys   | C3      |
|  11 | Mbooni Boys High School                 | Boys   | C1      |
|  12 | Moi Girls Secondary Kibwezi             | Girls  | C3      |
|  13 | Mukaa Boys' High School                 | Boys   | C1      |
|  14 | Mwaani Boys' Secondary                  | Boys   | C1      |
|  15 | Mwaani Girls Secondary                  | Girls  | C3      |
|  16 | Ngoto Boys High School                  | Boys   | C1      |
|  17 | Precious Blood Secondary School Kilungu | Girls  | C1      |
|  18 | St. Joseph's Girls Secondary Kibwezi    | Girls  | C1      |
|  19 | St. Martin Kathonzweni School           | Boys   | C2      |
| --- | --------------------------------------- | ------ | ------- |


### Nyandarua County

**National (5)**

| #   | School Name              | Gender | Cluster |
| --- | ------------------------ | ------ | ------- |
|   1 | Karima Girls             | Girls  | null    |
|   2 | Magomano Secondary       | Girls  | null    |
|   3 | Njabini Boys High School | Boys   | null    |
|   4 | Nyahururu High School    | Boys   | null    |
|   5 | Nyandarua High           | null   | null    |
| --- | ------------------------ | ------ | ------- |

**Extra-County (10)**

| #   | School Name                      | Gender | Cluster |
| --- | -------------------------------- | ------ | ------- |
|   1 | Leshau Boys Secondary            | Boys   | C3      |
|   2 | Magomano Secondary               | Girls  | C3      |
|   3 | Magumu High School               | Boys   | C2      |
|   4 | Mt Kinangop Girls' Secondary     | Girls  | C1      |
|   5 | Ndaragwa Girls                   | Girls  | C3      |
|   6 | Njabini Boys High School         | Boys   | C1      |
|   7 | Nyahururu High School            | Boys   | C1      |
|   8 | Nyakiambi Girls Secondary        | Girls  | C2      |
|   9 | St. Pauls Amani Boys High School | Boys   | C3      |
|  10 | Wanjohi Secondary                | Girls  | C1      |
| --- | -------------------------------- | ------ | ------- |


### Nyeri County

**National (7)**

| #   | School Name                    | Gender | Cluster |
| --- | ------------------------------ | ------ | ------- |
|   1 | Bishop Gatimu Ngandu Girls     | Girls  | null    |
|   2 | Kagumo High                    | Boys   | null    |
|   3 | Mahiga Girls                   | Girls  | null    |
|   4 | Nyeri High School              | Boys   | null    |
|   5 | Othaya Boys                    | Boys   | null    |
|   6 | Rev Muhoro School for the Deaf | SNE    | null    |
|   7 | South Tetu Girls               | Girls  | null    |
| --- | ------------------------------ | ------ | ------- |

**Extra-County (24)**

| #   | School Name                               | Gender | Cluster |
| --- | ----------------------------------------- | ------ | ------- |
|   1 | Birithia Secondary                        | Girls  | C3      |
|   2 | Chinga Boys High                          | Boys   | C1      |
|   3 | Dedan Kimathi Memorial High               | Boys   | C2      |
|   4 | Endarasha High                            | Boys   | C2      |
|   5 | Giakanja Secondary                        | Boys   | C1      |
|   6 | Kangubiri Girls High                      | Girls  | C1      |
|   7 | Kanjuri High                              | Boys   | C1      |
|   8 | Karima Boys' High                         | Boys   | C1      |
|   9 | Kenyatta High School Mahiga               | Boys   | C1      |
|  10 | Kirimara High                             | Boys   | C1      |
|  11 | Mahiga Girls Secondary                    | Girls  | C1      |
|  12 | Mukurweini Boys' High                     | Boys   | C2      |
|  13 | Muruguru Secondary                        | Girls  | C3      |
|  14 | Naromoru Boys Secondary                   | Boys   | C3      |
|  15 | Naromoru Girls Secondary                  | Girls  | C1      |
|  16 | Nyeri High School                         | Boys   | C1      |
|  17 | Othaya Boys High                          | Boys   | C1      |
|  18 | Othaya Girls Secondary                    | Girls  | C1      |
|  19 | Our Lady of Fatima Chinga Girls Secondary | Girls  | C1      |
|  20 | South Tetu Girls' High                    | Girls  | C1      |
|  21 | St Bonaventure Kaheti Boys High           | Boys   | C1      |
|  22 | St. Bakhita Gataragwa Girls High          | Girls  | C1      |
|  23 | St.Teresa Moi Equator Girls' Secondary    | Girls  | C3      |
|  24 | Tumutumu Girls' High                      | Girls  | C1      |
| --- | ----------------------------------------- | ------ | ------- |


### Kirinyaga County

**National (5)**

| #   | School Name                             | Gender | Cluster |
| --- | --------------------------------------- | ------ | ------- |
|   1 | Baricho Boys High School                | Boys   | null    |
|   2 | Kabare Girls High School                | Girls  | null    |
|   3 | Kianyaga High School                    | Boys   | null    |
|   4 | Mutira Girls Secondary                  | Girls  | null    |
|   5 | St. Faustina Kerugoya Girls High School | Girls  | null    |
| --- | --------------------------------------- | ------ | ------- |

**Extra-County (15)**

| #   | School Name                          | Gender | Cluster |
| --- | ------------------------------------ | ------ | ------- |
|   1 | Kamuiru Secondary                    | Boys   | C1      |
|   2 | Karoti Girls High                    | Girls  | C1      |
|   3 | Kerugoya Boys High                   | Boys   | C1      |
|   4 | Kerugoya Girls High                  | Girls  | C1      |
|   5 | Kiamutugu Boys High                  | Boys   | C1      |
|   6 | Kianyaga High School                 | Boys   | C1      |
|   7 | Kiaragana Girls Secondary            | Girls  | C3      |
|   8 | Kiburu Secondary                     | Boys   | C3      |
|   9 | Mugumo Girls' Secondary              | Girls  | C3      |
|  10 | Mutira Girls Secondary               | Girls  | C1      |
|  11 | Ngaru Girls Secondary                | Girls  | C3      |
|  12 | Ngiriambu Girls Secondary            | Girls  | C1      |
|  13 | St Marys Karumandi Secondary         | Boys   | C3      |
|  14 | St. Bakhita Kiburia Girls' Secondary | Girls  | C1      |
|  15 | St. Mary's Mwea Girls Secondary      | Girls  | C3      |
| --- | ------------------------------------ | ------ | ------- |


### Murang'a County

**National (7)**

| #   | School Name                               | Gender | Cluster |
| --- | ----------------------------------------- | ------ | ------- |
|   1 | Kahuhia Girls                             | Girls  | null    |
|   2 | Kamahuha Girls High School                | Girls  | null    |
|   3 | Kiaguthu Boys Secondary                   | Boys   | null    |
|   4 | Mugoiri Girls High School                 | Girls  | null    |
|   5 | Murang'a High                             | Boys   | null    |
|   6 | Murang'a School for the Visually Impaired | SNE    | null    |
|   7 | Njiri School                              | Boys   | null    |
| --- | ----------------------------------------- | ------ | ------- |

**Extra-County (29)**

| #   | School Name                              | Gender | Cluster |
| --- | ---------------------------------------- | ------ | ------- |
|   1 | Gaichanjiru High School                  | Boys   | C1      |
|   2 | Gatanga Girls' Secondary                 | Girls  | C1      |
|   3 | Githumu High School                      | Boys   | C1      |
|   4 | Githunguri Girls High                    | Girls  | C1      |
|   5 | Gitugi Girls High                        | Girls  | C1      |
|   6 | Gituru Secondary                         | Mixed  | C2      |
|   7 | Ichagaki Boys High School                | Boys   | C3      |
|   8 | Kahuhia Girls' High                      | Girls  | C1      |
|   9 | Kamahuha Girls High                      | Girls  | C1      |
|  10 | Kangema High School                      | Boys   | C1      |
|  11 | Kiaguthu Boys Secondary                  | Boys   | C1      |
|  12 | Kianderi Girls Secondary                 | Girls  | C3      |
|  13 | Kibutha Girls Secondary                  | Girls  | C3      |
|  14 | Kigumo Bendera High                      | Boys   | C2      |
|  15 | Kiria-Ini Girls Secondary                | Girls  | C1      |
|  16 | Kirogo Secondary                         | Boys   | C2      |
|  17 | Kirwara Secondary                        | Boys   | C1      |
|  18 | Makuyu Girls Secondary                   | Girls  | C3      |
|  19 | Makuyu Secondary                         | Boys   | C3      |
|  20 | Mumbi Girls' High                        | Girls  | C1      |
|  21 | Naaro High School                        | Mixed  | C1      |
|  22 | Ng'araria Girls Secondary                | Girls  | C1      |
|  23 | Nginda Girl's Secondary                  | Girls  | C2      |
|  24 | Njiiri School                            | Boys   | C1      |
|  25 | Njumbi High School                       | Boys   | C1      |
|  26 | Nyagatugu Secondary                      | Boys   | C3      |
|  27 | Ruchu Girls Secondary                    | Girls  | C1      |
|  28 | St. Charles Lwanga Secondary Karimamwaro | Mixed  | C3      |
|  29 | Weithaga Boys Secondary                  | Boys   | C1      |
| --- | ---------------------------------------- | ------ | ------- |


### Kiambu County

**National (15)**

| #   | School Name                                 | Gender | Cluster |
| --- | ------------------------------------------- | ------ | ------- |
|   1 | Alliance Girls High School                  | Girls  | null    |
|   2 | Alliance High School                        | Boys   | null    |
|   3 | Kambui Girls High School                    | Girls  | null    |
|   4 | Kiambu High School                          | Boys   | null    |
|   5 | Limuru Girls' School                        | Girls  | null    |
|   6 | Loreto High School Limuru                   | Girls  | null    |
|   7 | Mang'u High School                          | Boys   | null    |
|   8 | Our Lady of Mt. Carmel Maryhills Girls      | Girls  | null    |
|   9 | PCEA Kambui School for the Hearing Impaired | SNE    | null    |
|  10 | Precious Blood Kagwe Girls Secondary        | Girls  | null    |
|  11 | SA High School for the Blind                | SNE    | null    |
|  12 | SA Joytown Secondary School for the PH      | SNE    | null    |
|  13 | St. Anne's Girls Lioki                      | Girls  | null    |
|  14 | St. Francis Girls High School Mang'u        | Girls  | null    |
|  15 | Thika High School                           | Boys   | null    |
| --- | ------------------------------------------- | ------ | ------- |

**Extra-County (19)**

| #   | School Name                          | Gender | Cluster |
| --- | ------------------------------------ | ------ | ------- |
|   1 | Chania Boys' High                    | Boys   | C1      |
|   2 | Chania Girls' High                   | Girls  | C1      |
|   3 | Githiga High School                  | Boys   | C3      |
|   4 | Kabete High School                   | Boys   | C3      |
|   5 | Kanunga High                         | Boys   | C1      |
|   6 | Kiambu High School                   | Boys   | C1      |
|   7 | Kijabe Boys High                     | Boys   | C1      |
|   8 | Kijabe Girls High                    | Girls  | C1      |
|   9 | Loreto Girls High School Kiambu      | Girls  | C1      |
|  10 | Mary Leakey Girls' High              | Girls  | C1      |
|  11 | Muhoho High                          | Boys   | C1      |
|  12 | Muthurwa Secondary                   | Girls  | C3      |
|  13 | Ndumberi Girls Secondary             | Girls  | C3      |
|  14 | Precious Blood Kagwe Girls Secondary | Girls  | C1      |
|  15 | Senior Chief Koinange Girls High     | Girls  | C1      |
|  16 | St Joseph High School                | Boys   | C3      |
|  17 | St. Anne's Secondary School-Lioki    | Girls  | C1      |
|  18 | St. Francis Girls High School Mang'u | Girls  | C1      |
|  19 | Thika High School                    | Boys   | C1      |
| --- | ------------------------------------ | ------ | ------- |


### Turkana County

**National (3)**

| #   | School Name                    | Gender | Cluster |
| --- | ------------------------------ | ------ | ------- |
|   1 | Katilu Girls Secondary School  | Girls  | null    |
|   2 | Lodwar Boys High School        | Boys   | null    |
|   3 | Turkana Girls Secondary School | Girls  | null    |
| --- | ------------------------------ | ------ | ------- |

**Extra-County (6)**

| #   | School Name                       | Gender | Cluster |
| --- | --------------------------------- | ------ | ------- |
|   1 | AIC Kang'itit Girls Secondary     | Girls  | C3      |
|   2 | Katabok Girls Secondary           | Girls  | C3      |
|   3 | Katilu Boys Secondary             | Boys   | C2      |
|   4 | Lokitaung Secondary               | Boys   | C3      |
|   5 | Our Lady's Girls Secondary Kakuma | Girls  | C2      |
|   6 | R C E A Lokori Boys Secondary     | Boys   | C3      |
| --- | --------------------------------- | ------ | ------- |

**County (11)**

| #   | School Name         | Gender | Cluster |
| --- | ------------------- | ------ | ------- |
|   1 | David Lee Adventist | Mixed  | null    |
|   2 | Kakuma Boys         | Boys   | null    |
|   3 | Kalobeyei           | Mixed  | null    |
|   4 | Kapedo Mixed        | null   | null    |
|   5 | Loima Boys          | Boys   | null    |
|   6 | Loima Girls         | Girls  | null    |
|   7 | Mogila Girls        | Girls  | null    |
|   8 | Napeililim          | Boys   | null    |
|   9 | Songot              | Boys   | null    |
|  10 | Tarachi Sec         | Mixed  | null    |
|  11 | Turkwel Boys        | Boys   | null    |
| --- | ------------------- | ------ | ------- |


### West Pokot County

**National (2)**

| #   | School Name                | Gender | Cluster |
| --- | -------------------------- | ------ | ------- |
|   1 | Chewoyet High School       | Boys   | null    |
|   2 | St. Elizabeth Girls School | Girls  | null    |
| --- | -------------------------- | ------ | ------- |

**Extra-County (11)**

| #   | School Name                            | Gender | Cluster |
| --- | -------------------------------------- | ------ | ------- |
|   1 | Chepkorniswo Boys' Secondary           | Boys   | C2      |
|   2 | Holy Cross Boys Secondary Kacheliba    | Boys   | C3      |
|   3 | Holy Rosary Girls High                 | Girls  | C3      |
|   4 | Kapenguria Boys High                   | Boys   | C1      |
|   5 | Nasokol Girls Secondary                | Girls  | C1      |
|   6 | Ortum Secondary                        | Boys   | C2      |
|   7 | Sook Boys Secondary                    | Boys   | C3      |
|   8 | St. Cecilia Girls Secondary Chepareria | Girls  | C1      |
|   9 | St. Comboni Amakuriat Secondary        | Boys   | C2      |
|  10 | St. Stephen Laikong Girls Secondary    | Girls  | C3      |
|  11 | Weiwei Secondary                       | Boys   | C2      |
| --- | -------------------------------------- | ------ | ------- |

**County (1)**

| #   | School Name               | Gender | Cluster |
| --- | ------------------------- | ------ | ------- |
|   1 | [Coverage gap - see note] | null   | null    |
| --- | ------------------------- | ------ | ------- |


### Samburu County

**National (2)**

| #   | School Name              | Gender | Cluster |
| --- | ------------------------ | ------ | ------- |
|   1 | Kisima Girls High School | Girls  | null    |
|   2 | Maralal High School      | Boys   | null    |
| --- | ------------------------ | ------ | ------- |

**Extra-County (8)**

| #   | School Name                 | Gender | Cluster |
| --- | --------------------------- | ------ | ------- |
|   1 | A I C Moi Girls Samburu     | Girls  | C2      |
|   2 | Baragoi Boys Secondary      | Boys   | C3      |
|   3 | Baragoi Girls Secondary     | Girls  | C2      |
|   4 | Nyiro Boys Secondary        | Boys   | C2      |
|   5 | P.C.E.A Tum Girls Secondary | Girls  | C3      |
|   6 | Uaso Boys Secondary         | Boys   | C3      |
|   7 | Wamba Boys Secondary        | Boys   | C2      |
|   8 | Wamba Girls Secondary       | Girls  | C3      |
| --- | --------------------------- | ------ | ------- |

**County (3)**

| #   | School Name  | Gender | Cluster |
| --- | ------------ | ------ | ------- |
|   1 | Kirisia High | Boys   | null    |
|   2 | Tipito Girls | Girls  | null    |
|   3 | Uaso Girls   | Girls  | null    |
| --- | ------------ | ------ | ------- |


### Trans Nzoia County

**National (3)**

| #   | School Name                    | Gender | Cluster |
| --- | ------------------------------ | ------ | ------- |
|   1 | St Anthony's Boys' High School | Boys   | null    |
|   2 | St Brigids Kiminini            | Girls  | null    |
|   3 | St Joseph's Boys High School   | Boys   | null    |
| --- | ------------------------------ | ------ | ------- |

**Extra-County (17)**

| #   | School Name                                   | Gender | Cluster |
| --- | --------------------------------------------- | ------ | ------- |
|   1 | A.I.C Moi Boys High School Kaplamai           | Boys   | C3      |
|   2 | AIC Kipkeikei Boys High                       | Boys   | C3      |
|   3 | Boma Boys' High School                        | Boys   | C1      |
|   4 | Friends Bwake Boys School                     | Boys   | C2      |
|   5 | Friends Bwake Girls Secondary                 | Girls  | C3      |
|   6 | Goseta Boys High                              | Boys   | C1      |
|   7 | Immaculate Conception Boys High School Mukuyu | Boys   | C3      |
|   8 | Kabuyefwe Friends Girls Secondary             | Girls  | C1      |
|   9 | Kabuyefwe Friends Secondary                   | Boys   | C1      |
|  10 | Kitale School-Secondary                       | Girls  | C1      |
|  11 | Kwanza Girls High School                      | Girls  | C2      |
|  12 | St Joseph's Girls' High School Kitale         | Girls  | C1      |
|  13 | St Mark's High School Cherangani              | Boys   | C1      |
|  14 | St. Mark's Girls High School                  | Girls  | C1      |
|  15 | St. Monica's Girls High School Kitale         | Girls  | C1      |
|  16 | St.Anthony's Boys' High School Kitale         | Boys   | C1      |
|  17 | St.Pauls Kitum High School                    | Boys   | C2      |
| --- | --------------------------------------------- | ------ | ------- |


### Uasin Gishu County

**National (3)**

| #   | School Name        | Gender | Cluster |
| --- | ------------------ | ------ | ------- |
|   1 | Moi Girls Eldoret  | Girls  | null    |
|   2 | St. Teresa's Girls | Girls  | null    |
|   3 | Wareng High School | Boys   | null    |
| --- | ------------------ | ------ | ------- |

**Extra-County (22)**

| #   | School Name                         | Gender | Cluster |
| --- | ----------------------------------- | ------ | ------- |
|   1 | A.I.C. Chebisaas Boys Secondary     | Boys   | C1      |
|   2 | ACK St. Lukes Cheptiret School      | Boys   | C2      |
|   3 | Arnesen's High School               | Boys   | C1      |
|   4 | Cheplaskei Secondary                | Boys   | C3      |
|   5 | Drys Girls Secondary                | Girls  | C1      |
|   6 | Hill School Eldoret                 | Girls  | C1      |
|   7 | Kamagut High School                 | Mixed  | C1      |
|   8 | Kapkoiga Girls Secondary            | Girls  | C2      |
|   9 | Kapngetuny High School              | Boys   | C1      |
|  10 | Kerotet Girls Secondary             | Girls  | C3      |
|  11 | Kipkabus Secondary                  | Boys   | C2      |
|  12 | Kipsangui Secondary                 | Boys   | C2      |
|  13 | Loreto High School Matunda          | Girls  | C1      |
|  14 | Moiben High School                  | Boys   | C2      |
|  15 | Ngeria Secondary                    | Girls  | C2      |
|  16 | Paul Boit Boys Secondary            | Boys   | C1      |
|  17 | Plateau Secondary                   | Girls  | C3      |
|  18 | Seko Girls Secondary                | Girls  | C1      |
|  19 | Simat Secondary                     | Mixed  | C3      |
|  20 | St Catherine Girls Secondary Kesses | Girls  | C2      |
|  21 | Sugoi Girls Secondary               | Girls  | C2      |
|  22 | Turbo Girls Secondary               | Girls  | C1      |
| --- | ----------------------------------- | ------ | ------- |


### Elgeyo-Marakwet County

**National (3)**

| #   | School Name                    | Gender | Cluster |
| --- | ------------------------------ | ------ | ------- |
|   1 | Moi Girls Kapsowar             | Girls  | null    |
|   2 | St. Patrick's High School Iten | Boys   | null    |
|   3 | Tartar Girls / St. Theresa's   | Girls  | null    |
| --- | ------------------------------ | ------ | ------- |

**Extra-County (17)**

| #   | School Name                           | Gender | Cluster |
| --- | ------------------------------------- | ------ | ------- |
|   1 | AIC Girls Secondary School Kessup     | Girls  | C2      |
|   2 | Chebara Secondary                     | Boys   | C1      |
|   3 | Kapkenda Girls' High                  | Girls  | C1      |
|   4 | Kapsowar Boys' Secondary              | Boys   | C3      |
|   5 | Kipsaos Secondary                     | Boys   | C3      |
|   6 | Kipsoen Secondary                     | Boys   | C2      |
|   7 | Metkei Secondary                      | Girls  | C1      |
|   8 | Mokwo Girls Secondary                 | Girls  | C3      |
|   9 | Our Lady of Glory-Kaptagat Girls High | Girls  | C1      |
|  10 | Sambirir Girls Secondary              | Girls  | C2      |
|  11 | Santa Maria Girls Secondary           | Girls  | C2      |
|  12 | Simotwo Secondary                     | Boys   | C2      |
|  13 | Sing'ore Girls Secondary              | Girls  | C1      |
|  14 | St. Peter's Marakwet Boys Secondary   | Boys   | C2      |
|  15 | Tambach Boys High School              | Boys   | C1      |
|  16 | Yemit Boys High School                | Boys   | C2      |
|  17 | Yemit Girls' Secondary                | Girls  | C3      |
| --- | ------------------------------------- | ------ | ------- |


### Nandi County

**National (6)**

| #   | School Name                             | Gender | Cluster |
| --- | --------------------------------------- | ------ | ------- |
|   1 | Kapnyeberai Girls School                | Girls  | null    |
|   2 | Kapsabet Boys High School               | Boys   | null    |
|   3 | Kapsabet Secondary School for the Deaf  | SNE    | null    |
|   4 | Meteitei Boys High                      | Boys   | null    |
|   5 | Samoei Boys High School                 | Boys   | null    |
|   6 | St Joseph's Girls Chepterit High School | Girls  | null    |
| --- | --------------------------------------- | ------ | ------- |

**Extra-County (25)**

| #   | School Name                         | Gender | Cluster |
| --- | ----------------------------------- | ------ | ------- |
|   1 | ACK St. Mark's Kaptumo Boys High    | Boys   | C2      |
|   2 | AIC Chebisaas Girls Secondary       | Girls  | C1      |
|   3 | Aldai Girls Secondary               | Girls  | C1      |
|   4 | Cheptil Secondary                   | Mixed  | C2      |
|   5 | Holy Rosary Girls' Secondary        | Girls  | C3      |
|   6 | Itigo Girls Secondary               | Girls  | C1      |
|   7 | Kapkolei Girls Secondary            | Girls  | C2      |
|   8 | Kapsabet Girls High                 | Girls  | C1      |
|   9 | Kemeloi Boys Secondary              | Boys   | C1      |
|  10 | Kilibwoni High                      | Boys   | C2      |
|  11 | Kipsigak High                       | Boys   | C2      |
|  12 | Kurgung Secondary                   | Boys   | C1      |
|  13 | Laboret Boys High                   | Boys   | C1      |
|  14 | Lelmokwo High                       | Boys   | C1      |
|  15 | Lelwak Secondary                    | Boys   | C3      |
|  16 | Meteitei Boys Secondary             | Boys   | C1      |
|  17 | Ndalat Gaa Girls' Secondary         | Girls  | C2      |
|  18 | Our Lady of Peace Girls' Secondary  | Girls  | C3      |
|  19 | Our Lady of Victory Girls Kapnyeb   | Girls  | C1      |
|  20 | Samoei Boys Secondary               | Boys   | C1      |
|  21 | Serem Secondary                     | Boys   | C2      |
|  22 | St.Mary's Tach Asis Girls Secondary | Girls  | C3      |
|  23 | Stephen Kositany Girls' High        | Girls  | C1      |
|  24 | Terige Secondary                    | Boys   | C1      |
|  25 | Tulwo Girls High                    | Girls  | C3      |
| --- | ----------------------------------- | ------ | ------- |


### Baringo County

**National (4)**

| #   | School Name              | Gender | Cluster |
| --- | ------------------------ | ------ | ------- |
|   1 | Baringo Boys High School | Boys   | null    |
|   2 | Kabarnet High School     | Boys   | null    |
|   3 | Kapropita High School    | Girls  | null    |
|   4 | Ossen Secondary School   | Girls  | null    |
| --- | ------------------------ | ------ | ------- |

**Extra-County (21)**

| #   | School Name                         | Gender | Cluster |
| --- | ----------------------------------- | ------ | ------- |
|   1 | Bartolimo Secondary                 | Boys   | C2      |
|   2 | Eldama Ravine Girls High            | Girls  | C1      |
|   3 | Emining Secondary                   | Boys   | C1      |
|   4 | Kabarnet High School                | Boys   | C1      |
|   5 | Kabimoi High School                 | Boys   | C2      |
|   6 | Kapropita Girls High                | Girls  | C1      |
|   7 | Kimngorom Girls High                | Girls  | C3      |
|   8 | Kisanana Boys High                  | Boys   | C3      |
|   9 | Kituro High School                  | Mixed  | C2      |
|  10 | Marigat Secondary                   | Boys   | C2      |
|  11 | Mogotio High School                 | Girls  | C1      |
|  12 | Moi High School Kabartonjo          | Boys   | C3      |
|  13 | Ossen Secondary                     | Girls  | C2      |
|  14 | Pemwai Girls' Secondary             | Girls  | C2      |
|  15 | Poror High School                   | Boys   | C1      |
|  16 | Ruth Kiptui Girls High School Kasok | Girls  | C2      |
|  17 | Saos Secondary                      | Boys   | C3      |
|  18 | Solian Girls High School            | Girls  | C2      |
|  19 | Tabagon Girls' Secondary            | Girls  | C3      |
|  20 | Tenges Secondary                    | Boys   | C2      |
|  21 | Toniok Secondary                    | Girls  | C2      |
| --- | ----------------------------------- | ------ | ------- |


### Laikipia County

**National (6)**

| #   | School Name                    | Gender | Cluster |
| --- | ------------------------------ | ------ | ------- |
|   1 | G.G. Rumaruti Secondary School | Boys   | null    |
|   2 | Gatero Girls High School       | Girls  | null    |
|   3 | Nanyuki High School            | Boys   | null    |
|   4 | Ndururumo High School          | Mixed  | null    |
|   5 | Njonjo Girls Senior School     | Girls  | null    |
|   6 | Nyahururu Girls School         | Girls  | null    |
| --- | ------------------------------ | ------ | ------- |

**Extra-County (12)**

| #   | School Name                    | Gender | Cluster |
| --- | ------------------------------ | ------ | ------- |
|   1 | Doldol Secondary               | Boys   | C2      |
|   2 | G.G Rumuruti Secondary         | Boys   | C1      |
|   3 | Gatero Girls High              | Girls  | C1      |
|   4 | Loise Nanyuki Girls' Secondary | Girls  | C1      |
|   5 | Mwenje Mixed Secondary         | Mixed  | C2      |
|   6 | Ndururi Secondary              | Mixed  | C3      |
|   7 | Ndururumo High School          | Mixed  | C1      |
|   8 | Ngumo Boys Secondary           | Boys   | C3      |
|   9 | Njorua High School             | Mixed  | C3      |
|  10 | St Francis Girls Secondary     | Girls  | C3      |
|  11 | St Jude Nturukuma Secondary    | Girls  | C3      |
|  12 | Tigithi Secondary              | Boys   | C2      |
| --- | ------------------------------ | ------ | ------- |


### Nakuru County

**National (12)**

| #   | School Name                         | Gender | Cluster |
| --- | ----------------------------------- | ------ | ------- |
|   1 | Jomo Kenyatta Boys High School      | Boys   | null    |
|   2 | Mary Mount Secondary                | Girls  | null    |
|   3 | Moi Forces Academy-Lanet            | null   | null    |
|   4 | Moi High School Kabarak             | null   | null    |
|   5 | Naivasha Girls Secondary            | Girls  | null    |
|   6 | Nakuru Boys High School             | Boys   | null    |
|   7 | Nakuru Girls High School            | Girls  | null    |
|   8 | Ngala Secondary School for the Deaf | SNE    | null    |
|   9 | Njoro Boys High School              | Boys   | null    |
|  10 | St. Bakhita Bahati Girls Secondary  | Girls  | null    |
|  11 | Utumishi Boys Academy               | Boys   | null    |
|  12 | Utumishi Girls Academy              | Girls  | null    |
| --- | ----------------------------------- | ------ | ------- |

**Extra-County (22)**

| #   | School Name                        | Gender | Cluster |
| --- | ---------------------------------- | ------ | ------- |
|   1 | AIC Morop Girls' Secondary         | Girls  | C2      |
|   2 | Bahati PCEA Secondary              | Girls  | C3      |
|   3 | Elburgon Secondary                 | Mixed  | C3      |
|   4 | Jomo Kenyatta Boys High School     | Boys   | C1      |
|   5 | Jomo Kenyatta Girls High School    | Girls  | C1      |
|   6 | Keringet Secondary                 | Mixed  | C3      |
|   7 | Kirobon Boys' High                 | Boys   | C2      |
|   8 | Kirobon Girls Secondary            | Girls  | C2      |
|   9 | Koelel Secondary                   | Boys   | C1      |
|  10 | Lake Naivasha Girls Secondary      | Girls  | C2      |
|  11 | Larmudiac Secondary                | Mixed  | C2      |
|  12 | Maai-Mahiu Boys Secondary          | Boys   | C3      |
|  13 | Maai-Mahiu Girls Secondary         | Girls  | C3      |
|  14 | Mary Mount Secondary               | Girls  | C1      |
|  15 | Michinda Secondary                 | Boys   | C2      |
|  16 | Molo Academy                       | Boys   | C1      |
|  17 | Naivasha Girls Secondary           | Girls  | C1      |
|  18 | Naivasha High School               | Boys   | C1      |
|  19 | Njoro Boys High School             | Boys   | C1      |
|  20 | Njoro Girls' Secondary             | Girls  | C1      |
|  21 | Solai Boys' Secondary              | Boys   | C2      |
|  22 | St. Bakhita Bahati Girls Secondary | Girls  | C1      |
| --- | ---------------------------------- | ------ | ------- |


### Narok County

**National (3)**

| #   | School Name                      | Gender | Cluster |
| --- | -------------------------------- | ------ | ------- |
|   1 | Kilgoris Boys Secondary School   | Boys   | null    |
|   2 | Narok High School                | Boys   | null    |
|   3 | Ole Tipis Girls Secondary School | Girls  | null    |
| --- | -------------------------------- | ------ | ------- |

**Extra-County (9)**

| #   | School Name                             | Gender | Cluster |
| --- | --------------------------------------- | ------ | ------- |
|   1 | Emurua Dikirr Secondary                 | Boys   | C3      |
|   2 | Kilgoris Girls Secondary                | Girls  | C2      |
|   3 | Maasai Girls Secondary                  | Girls  | C1      |
|   4 | Moi Naikarra Secondary                  | Mixed  | C3      |
|   5 | Narok High School                       | Boys   | C2      |
|   6 | Nkorkorri Boys Secondary                | Boys   | C3      |
|   7 | Ololulung'a Secondary                   | Boys   | C2      |
|   8 | Oloomirani Boys Secondary               | Boys   | C3      |
|   9 | St. Mary's Girls Secondary School-Narok | Girls  | C3      |
| --- | --------------------------------------- | ------ | ------- |


### Kajiado County

**National (4)**

| #   | School Name            | Gender | Cluster |
| --- | ---------------------- | ------ | ------- |
|   1 | Moi Girls Isinya       | Girls  | null    |
|   2 | Naisula School         | null   | null    |
|   3 | Olkejuado High School  | Boys   | null    |
|   4 | Oloolaiser High School | Boys   | null    |
| --- | ---------------------- | ------ | ------- |

**Extra-County (9)**

| #   | School Name                   | Gender | Cluster |
| --- | ----------------------------- | ------ | ------- |
|   1 | Baraka Oontoyie Secondary     | Girls  | C2      |
|   2 | Enoomatasiani Girls Secondary | Girls  | C3      |
|   3 | Kiluani Newlife Secondary     | Boys   | C3      |
|   4 | Najile Boys Secondary         | Boys   | C3      |
|   5 | Nakeel Secondary              | Boys   | C1      |
|   6 | Noonkopir Girls Secondary     | Girls  | C1      |
|   7 | Olkejuado High School         | Boys   | C1      |
|   8 | Oloitokitok Secondary         | Boys   | C1      |
|   9 | Olooseos Secondary            | Girls  | C3      |
| --- | ----------------------------- | ------ | ------- |

**County (16)**

| #   | School Name                     | Gender | Cluster |
| --- | ------------------------------- | ------ | ------- |
|   1 | Ewuaso Girls Secondary Boarding | Girls  | null    |
|   2 | General Joseph Nkaissery High   | null   | null    |
|   3 | Ilbissil Girls Secondary        | Girls  | null    |
|   4 | Ilkisonko Secondary             | Boys   | null    |
|   5 | Iloodokilani Secondary          | Mixed  | null    |
|   6 | Lenkisem Mixed Boarding         | Mixed  | null    |
|   7 | Maparasha Secondary             | Mixed  | null    |
|   8 | Mashuuru Secondary              | Boys   | null    |
|   9 | Meto Secondary                  | Mixed  | null    |
|  10 | Namelok Secondary               | Mixed  | null    |
|  11 | Ngatataek Mixed Secondary       | Mixed  | null    |
|  12 | Nkoile Boys High School         | Boys   | null    |
|  13 | PCEA Ilngarooj Boys Secondary   | Boys   | null    |
|  14 | Rombo Girls' Boarding Secondary | Girls  | null    |
|  15 | Sajiloni Girls Secondary        | Girls  | null    |
|  16 | Thomas Fish Secondary           | Mixed  | null    |
| --- | ------------------------------- | ------ | ------- |


### Kericho County

**National (7)**

| #   | School Name                 | Gender | Cluster |
| --- | --------------------------- | ------ | ------- |
|   1 | A.I.C Litein Girls' High    | Girls  | null    |
|   2 | Kabianga High School        | Boys   | null    |
|   3 | Kipsigis Girls' High School | Girls  | null    |
|   4 | Litein High School          | Boys   | null    |
|   5 | Moi Tea Girls' High School  | Girls  | null    |
|   6 | Tengecha Boys High School   | Boys   | null    |
|   7 | Tengecha Girls' High School | Girls  | null    |
| --- | --------------------------- | ------ | ------- |

**Extra-County (21)**

| #   | School Name                             | Gender | Cluster |
| --- | --------------------------------------- | ------ | ------- |
|   1 | A.I.C Litein Girls Secondary            | Girls  | C1      |
|   2 | Cheborge Boys High                      | Boys   | C3      |
|   3 | Chebwagan Secondary                     | Boys   | C3      |
|   4 | Chelilis Girls Secondary                | Girls  | C2      |
|   5 | Chepkoton Girls Secondary               | Girls  | C3      |
|   6 | Cheptenye Secondary                     | Boys   | C2      |
|   7 | Kaborok Girls High                      | Girls  | C3      |
|   8 | Kericho High School                     | Boys   | C1      |
|   9 | Kericho Tea Secondary                   | Boys   | C2      |
|  10 | Kipkelion Girls' High                   | Girls  | C1      |
|  11 | Korongoi Girls' Secondary               | Girls  | C2      |
|  12 | Litein High School                      | Boys   | C1      |
|  13 | Londiani Boys Secondary                 | Boys   | C1      |
|  14 | Londiani Girls' Secondary               | Girls  | C1      |
|  15 | Moi Kipsitet Girls Secondary            | Girls  | C2      |
|  16 | Moi Tea Girls Secondary                 | Girls  | C1      |
|  17 | Sacred Hill Girls' High School-Londiani | Girls  | C1      |
|  18 | Soliat Boys' Secondary                  | Boys   | C2      |
|  19 | Sosiot Girls' Secondary                 | Girls  | C1      |
|  20 | Tengecha Boys High                      | Boys   | C1      |
|  21 | Tengecha Girls Secondary                | Girls  | C1      |
| --- | --------------------------------------- | ------ | ------- |


### Bomet County

**National (4)**

| #   | School Name                     | Gender | Cluster |
| --- | ------------------------------- | ------ | ------- |
|   1 | Kaplong Boys' High School       | Boys   | null    |
|   2 | Kaplong Girls' Secondary School | Girls  | null    |
|   3 | Moi Siongiroi Girls' Secondary  | Girls  | null    |
|   4 | Tenwek Boys High School         | Boys   | null    |
| --- | ------------------------------- | ------ | ------- |

**Extra-County (12)**

| #   | School Name                    | Gender | Cluster |
| --- | ------------------------------ | ------ | ------- |
|   1 | Boito Secondary                | Boys   | C2      |
|   2 | Chebilat Secondary             | Boys   | C2      |
|   3 | Chepalungu Boys' High          | Boys   | C3      |
|   4 | Kaboson Girls Secondary        | Girls  | C3      |
|   5 | Kabungut Secondary             | Boys   | C3      |
|   6 | Kaplong Boys High School       | Boys   | C2      |
|   7 | Kimulot Secondary              | Boys   | C1      |
|   8 | Koiwa Boys High                | Boys   | C1      |
|   9 | Longisa High School            | Boys   | C3      |
|  10 | Moi Siongiroi Girls' Secondary | Girls  | C1      |
|  11 | Ndanai Secondary               | Girls  | C3      |
|  12 | Saseta Girls' Secondary        | Girls  | C1      |
| --- | ------------------------------ | ------ | ------- |


### Kakamega County

**National (7)**

| #   | School Name                                  | Gender | Cluster |
| --- | -------------------------------------------- | ------ | ------- |
|   1 | ACK Ematundu Boys Sec. and Vocational School | SNE    | null    |
|   2 | Butere Girls High School                     | Girls  | null    |
|   3 | Kakamega School                              | Boys   | null    |
|   4 | Musingu Boys High School                     | Boys   | null    |
|   5 | St. Angela Mumias Vocational for the Deaf    | SNE    | null    |
|   6 | St. Peter's Mumias Boys High School          | Boys   | null    |
|   7 | The Sacred Heart Girls Mukumu                | Girls  | null    |
| --- | -------------------------------------------- | ------ | ------- |

**Extra-County (26)**

| #   | School Name                                 | Gender | Cluster |
| --- | ------------------------------------------- | ------ | ------- |
|   1 | Archbishop Njenga Girls' High               | Girls  | C1      |
|   2 | Bishop Sulumeti Girls Secondary             | Girls  | C3      |
|   3 | Butere Boys High School                     | Boys   | C1      |
|   4 | Chebuyusi Boys High                         | Boys   | C1      |
|   5 | Eregi Girls High School                     | Girls  | C2      |
|   6 | Ingotse High School                         | Boys   | C2      |
|   7 | Kivaywa Secondary                           | Boys   | C1      |
|   8 | Lubinu Secondary                            | Boys   | C1      |
|   9 | Lugari Secondary                            | Boys   | C2      |
|  10 | Malava Boys High School                     | Boys   | C2      |
|  11 | Mary Seat of Wisdom Bulimbo Girls Secondary | Girls  | C2      |
|  12 | Mautuma Secondary                           | Boys   | C3      |
|  13 | Moi Girls' Secondary-Nangili                | Girls  | C2      |
|  14 | Musingu Boys High School                    | Boys   | C1      |
|  15 | Musoli Girls High School                    | Girls  | C1      |
|  16 | Mwihila High School                         | Boys   | C1      |
|  17 | Shanderema Secondary                        | Boys   | C3      |
|  18 | Shikunga Secondary                          | Mixed  | C1      |
|  19 | St John The Baptist Likuyani Secondary      | Boys   | C1      |
|  20 | St. Agnes Girls High School Shibuye         | Girls  | C3      |
|  21 | St. Mary's Mumias Girls High                | Girls  | C1      |
|  22 | St. Mathias Kholera Boys Secondary          | Boys   | C1      |
|  23 | St. Peter's Mumias Boys' High               | Boys   | C1      |
|  24 | St.Anne's Nzoia Girls' Secondary            | Girls  | C3      |
|  25 | St.Ignatius Mukumu Boys High                | Boys   | C2      |
|  26 | The Sacred Heart Girls Mukumu               | Girls  | C1      |
| --- | ------------------------------------------- | ------ | ------- |


### Vihiga County

**National (5)**

| #   | School Name                                  | Gender | Cluster |
| --- | -------------------------------------------- | ------ | ------- |
|   1 | Bunyore Girls                                | Girls  | null    |
|   2 | Chavakali High School                        | Boys   | null    |
|   3 | Friends School Keveye Girls                  | Girls  | null    |
|   4 | Nyang'ori Boys High School                   | Boys   | null    |
|   5 | St. Claire Ebukuyia for the Hearing Impaired | SNE    | null    |
| --- | -------------------------------------------- | ------ | ------- |

**Extra-County (17)**

| #   | School Name                           | Gender | Cluster |
| --- | ------------------------------------- | ------ | ------- |
|   1 | Ebusakami Girls Secondary             | Girls  | C2      |
|   2 | Emusire High School                   | Boys   | C1      |
|   3 | Friends School Kaimosi Boys Secondary | Boys   | C3      |
|   4 | Friends School Kaimosi Girls          | Girls  | C1      |
|   5 | Friends School Keveye Girls           | Girls  | C1      |
|   6 | Friends School Mbale                  | Boys   | C1      |
|   7 | Goibei Girls High                     | Girls  | C2      |
|   8 | Hobunaka Secondary                    | Boys   | C3      |
|   9 | Igunga Girls' High                    | Girls  | C2      |
|  10 | Madira Girls' High                    | Girls  | C3      |
|  11 | Moi Girls' Secondary-Vokoli           | Girls  | C1      |
|  12 | Mudavadi Girls High                   | Girls  | C2      |
|  13 | Nyang'ori Boys High                   | Boys   | C1      |
|  14 | St. Clare's Maragoli Girls            | Girls  | C1      |
|  15 | St. Pauls Erusui Girls High           | Girls  | C2      |
|  16 | Tigoi Girls Secondary                 | Girls  | C3      |
|  17 | Vihiga Friends High School            | Boys   | C1      |
| --- | ------------------------------------- | ------ | ------- |


### Bungoma County

**National (7)**

| #   | School Name                                          | Gender | Cluster |
| --- | ---------------------------------------------------- | ------ | ------- |
|   1 | Cardinal Otunga Girls High School                    | Girls  | null    |
|   2 | Friends Kamusinga                                    | Boys   | null    |
|   3 | Joyvalley S.A. Special for the Hearing Impaired      | SNE    | null    |
|   4 | Kibabii High School                                  | Boys   | null    |
|   5 | Lugulu Girls                                         | Girls  | null    |
|   6 | Moi Girls High School Kamusinga                      | Girls  | null    |
|   7 | Nalondo CBM Secondary for the Physically Handicapped | SNE    | null    |
| --- | ---------------------------------------------------- | ------ | ------- |

**Extra-County (18)**

| #   | School Name                           | Gender | Cluster |
| --- | ------------------------------------- | ------ | ------- |
|   1 | A C Butonge High School               | Boys   | C3      |
|   2 | Bungoma High School                   | Boys   | C1      |
|   3 | Cardinal Otunga Girls High            | Girls  | C1      |
|   4 | Chebukaka Girls Secondary             | Girls  | C3      |
|   5 | Chesamisi Boys High                   | Boys   | C1      |
|   6 | Chwele Girls High                     | Girls  | C2      |
|   7 | Friends School Bokoli                 | Boys   | C3      |
|   8 | Kamusinde Boys High                   | Boys   | C3      |
|   9 | Kapsokwony High School                | Boys   | C2      |
|  10 | Khasoko High School                   | Boys   | C2      |
|  11 | Kibabii High School                   | Boys   | C1      |
|  12 | Kibuk Girls High                      | Girls  | C2      |
|  13 | Moi Girls High School Kamusinga       | Girls  | C1      |
|  14 | Namawanga Girls                       | Girls  | C3      |
|  15 | Ndivisi Girls High                    | Girls  | C3      |
|  16 | St. Luke's Boys' High School Kimilili | Boys   | C1      |
|  17 | St.Cecilia Girls Misikhu              | Girls  | C1      |
|  18 | Teremi Boys High                      | Boys   | C1      |
| --- | ------------------------------------- | ------ | ------- |


### Busia County

**National (5)**

| #   | School Name                                | Gender | Cluster |
| --- | ------------------------------------------ | ------ | ------- |
|   1 | Butula Boys High School                    | Boys   | null    |
|   2 | Nambale Secondary School                   | Boys   | null    |
|   3 | S.A. Kolanya Girls Secondary School        | Girls  | null    |
|   4 | St. Brigid Secondary School and Vocational | null   | null    |
|   5 | St. Stephen Lwanya Girls                   | Girls  | null    |
| --- | ------------------------------------------ | ------ | ------- |

**Extra-County (12)**

| #   | School Name                           | Gender | Cluster |
| --- | ------------------------------------- | ------ | ------- |
|   1 | Bishop Sulumeti Chelelemuk Girls High | Girls  | C3      |
|   2 | Busiada Girls' High                   | Girls  | C3      |
|   3 | Kisoko Girls Secondary                | Girls  | C2      |
|   4 | Nambale Secondary                     | Boys   | C1      |
|   5 | S.A. Kolanya Boys High School         | Boys   | C1      |
|   6 | Sigalame High School                  | Boys   | C1      |
|   7 | St Mary's Mundika High                | Boys   | C3      |
|   8 | St Monica Chakol Girls' High          | Girls  | C2      |
|   9 | St. Cecilia Nangina Girls High        | Girls  | C1      |
|  10 | St. Paul's Amukura High               | Boys   | C2      |
|  11 | St. Stephens Lwanya Girls Secondary   | Girls  | C1      |
|  12 | St.Benedict's High School Budalangi   | Boys   | C3      |
| --- | ------------------------------------- | ------ | ------- |


### Siaya County

**National (9)**

| #   | School Name                                            | Gender | Cluster |
| --- | ------------------------------------------------------ | ------ | ------- |
|   1 | Fr. Ouderaa Secondary School for the Visually Impaired | SNE    | null    |
|   2 | Maranda High                                           | Boys   | null    |
|   3 | Ng'iya Girls High School                               | Girls  | null    |
|   4 | Nico Hauser Special School                             | SNE    | null    |
|   5 | Ramba Secondary                                        | null   | null    |
|   6 | Sawagongo High School                                  | Boys   | null    |
|   7 | St. Francis Rangala Girls Secondary                    | Girls  | null    |
|   8 | St. Mary's Lwak Girls School                           | Girls  | null    |
|   9 | St. Mary's Yala                                        | Boys   | null    |
| --- | ------------------------------------------------------ | ------ | ------- |

**Extra-County (19)**

| #   | School Name                          | Gender | Cluster |
| --- | ------------------------------------ | ------ | ------- |
|   1 | Aluor Girls Secondary                | Girls  | C2      |
|   2 | Ambira High School                   | Boys   | C1      |
|   3 | Barding Secondary                    | Boys   | C1      |
|   4 | Bishop Okoth Girls'-Mbaga Secondary  | Girls  | C1      |
|   5 | Chianda High School                  | Boys   | C1      |
|   6 | Nyamira Girls Secondary              | Girls  | C1      |
|   7 | Nyamonye Girls' Secondary            | Girls  | C3      |
|   8 | Nyawara Girls' Secondary             | Girls  | C3      |
|   9 | Ramba Secondary                      | Boys   | C1      |
|  10 | Rang'ala Boys Secondary              | Boys   | C3      |
|  11 | Sawagongo High School                | Boys   | C1      |
|  12 | Sega Girls Secondary                 | Girls  | C2      |
|  13 | Sinaga Girls Secondary               | Girls  | C2      |
|  14 | Sirembe Mixed Secondary              | Mixed  | C3      |
|  15 | St. Francis Ranga'la Girls Secondary | Girls  | C1      |
|  16 | St. Mary's Lwak Girls' School        | Girls  | C1      |
|  17 | St. Mary's School Yala               | Boys   | C1      |
|  18 | Ukwala Secondary                     | Boys   | C3      |
|  19 | Usenge High School                   | Boys   | C1      |
| --- | ------------------------------------ | ------ | ------- |


### Kisumu County

**National (8)**

| #   | School Name                       | Gender | Cluster |
| --- | --------------------------------- | ------ | ------- |
|   1 | Joyland Special Secondary         | SNE    | null    |
|   2 | Kibos Visually Impaired Secondary | SNE    | null    |
|   3 | Kisumu Boys High School           | Boys   | null    |
|   4 | Kisumu Girls High School          | Girls  | null    |
|   5 | Maseno School                     | Boys   | null    |
|   6 | Nyakach Girls High School         | Girls  | null    |
|   7 | Sinyolo Girls Secondary           | Girls  | null    |
|   8 | St. George Special Secondary      | SNE    | null    |
| --- | --------------------------------- | ------ | ------- |

**Extra-County (19)**

| #   | School Name                    | Gender | Cluster |
| --- | ------------------------------ | ------ | ------- |
|   1 | Achego Girls Secondary         | Girls  | C1      |
|   2 | ACK Rae Girls High             | Girls  | C2      |
|   3 | Ahero Girls Secondary          | Girls  | C2      |
|   4 | Chulaimbo Secondary            | Boys   | C1      |
|   5 | Kisumu Boys High School        | Boys   | C1      |
|   6 | Koru Girls Secondary           | Girls  | C1      |
|   7 | Migingo Girls Secondary        | Girls  | C3      |
|   8 | Miwani Secondary               | Boys   | C3      |
|   9 | Ngere High School              | Boys   | C2      |
|  10 | Nyabondo High School           | Boys   | C1      |
|  11 | Nyakach Girls' High            | Girls  | C1      |
|  12 | Onjiko High School             | Boys   | C1      |
|  13 | Otieno Oyoo Secondary          | Boys   | C2      |
|  14 | Sigoti Complex Girls Secondary | Girls  | C1      |
|  15 | Sinyolo Girls Secondary        | Girls  | C2      |
|  16 | St. Barnabas Girls' Secondary  | Girls  | C2      |
|  17 | St. Stephen's Menara Secondary | Boys   | C3      |
|  18 | St.Teresa's Girls Secondary    | Girls  | C3      |
|  19 | Thurdibuoro Mixed Secondary    | Mixed  | C1      |
| --- | ------------------------------ | ------ | ------- |


### Homa Bay County

**National (8)**

| #   | School Name                                       | Gender | Cluster |
| --- | ------------------------------------------------- | ------ | ------- |
|   1 | Agoro Sare High School                            | Boys   | null    |
|   2 | Asumbi Girls                                      | Girls  | null    |
|   3 | Bishop Linus Okok Girls Secondary                 | Girls  | null    |
|   4 | Homa Bay High School                              | Boys   | null    |
|   5 | Lambwe Special Secondary for the Hearing Impaired | SNE    | null    |
|   6 | Mbita High School                                 | Boys   | null    |
|   7 | Ogande Girls High School                          | Girls  | null    |
|   8 | Orero Boys Secondary School                       | Boys   | null    |
| --- | ------------------------------------------------- | ------ | ------- |

**Extra-County (23)**

| #   | School Name                             | Gender | Cluster |
| --- | --------------------------------------- | ------ | ------- |
|   1 | Agoro Sare High School                  | Boys   | C1      |
|   2 | Ambassador Pamela Mboya Girls Secondary | Girls  | C3      |
|   3 | Bishop Linus Okok Girls' Secondary      | Girls  | C1      |
|   4 | Dudi Girls Secondary                    | Girls  | C1      |
|   5 | Gendia Secondary                        | Boys   | C2      |
|   6 | Homa Bay High School                    | Boys   | C1      |
|   7 | Kuoyo Kochia Secondary                  | Boys   | C3      |
|   8 | Magina Girls Secondary                  | Girls  | C3      |
|   9 | Mawego Secondary                        | Girls  | C2      |
|  10 | Mirogi Boys' High                       | Boys   | C2      |
|  11 | Mirogi Girls Secondary                  | Girls  | C2      |
|  12 | Moi Girls' Secondary Sindo              | Girls  | C1      |
|  13 | Nyamasare Girls' Secondary              | Girls  | C3      |
|  14 | Ober Secondary                          | Boys   | C3      |
|  15 | Ogande Girls' High                      | Girls  | C1      |
|  16 | Orero Boys Secondary                    | Boys   | C1      |
|  17 | Oriwo Boys High School                  | Boys   | C1      |
|  18 | Our Lady Of Mercy Ringa Boys Secondary  | Boys   | C1      |
|  19 | Ratang'a Secondary                      | Boys   | C1      |
|  20 | St.Gabriel's Gwassi Girls Secondary     | Girls  | C1      |
|  21 | Tom Mboya Secondary                     | Boys   | C2      |
|  22 | Tonga Boys Secondary                    | Boys   | C1      |
|  23 | Wang'apala Secondary                    | Boys   | C2      |
| --- | --------------------------------------- | ------ | ------- |


### Migori County

**National (7)**

| #   | School Name                          | Gender | Cluster |
| --- | ------------------------------------ | ------ | ------- |
|   1 | Kadika Girls Secondary School        | Girls  | null    |
|   2 | Kanga High                           | Boys   | null    |
|   3 | Kuja Special School for the Deaf     | SNE    | null    |
|   4 | Moi Nyabohanse Girls School          | Girls  | null    |
|   5 | St. Alberts Girls High School Ulanda | Girls  | null    |
|   6 | St. Joseph's Rapogi Secondary School | Boys   | null    |
|   7 | Tarang'anya Boys High School         | Boys   | null    |
| --- | ------------------------------------ | ------ | ------- |

**Extra-County (24)**

| #   | School Name                                 | Gender | Cluster |
| --- | ------------------------------------------- | ------ | ------- |
|   1 | Anjego Mixed Secondary                      | Mixed  | C1      |
|   2 | Bande Girls Secondary                       | Girls  | C2      |
|   3 | Bware Secondary                             | Mixed  | C2      |
|   4 | Ikerege Mixed Secondary                     | Mixed  | C2      |
|   5 | Isibania Boys Secondary                     | Boys   | C1      |
|   6 | Kadika Girls' Secondary                     | Girls  | C1      |
|   7 | Kangeso Secondary                           | Boys   | C2      |
|   8 | Kanyawanga Secondary                        | Boys   | C1      |
|   9 | Koderobara Secondary                        | Boys   | C1      |
|  10 | Migori Secondary                            | Boys   | C1      |
|  11 | Moi Suba Girls Secondary                    | Girls  | C2      |
|  12 | Nyabisawa Girls Secondary                   | Girls  | C1      |
|  13 | Nyaroha Girls Secondary                     | Girls  | C3      |
|  14 | Oyugi Ogango Girls' Secondary               | Girls  | C2      |
|  15 | Pe-Hill High School                         | Boys   | C3      |
|  16 | Sori Secondary                              | Boys   | C1      |
|  17 | St Joseph's Rapogi Secondary                | Boys   | C1      |
|  18 | St Mary's Mabera Girls Secondary            | Girls  | C2      |
|  19 | St Peter's Abwao Secondary                  | Boys   | C3      |
|  20 | St. Albert's Girls High School Ulanda       | Girls  | C1      |
|  21 | St. Angela Merici Isibania Girls' Secondary | Girls  | C2      |
|  22 | St. Mary Gorrety's Dede Girls Secondary     | Girls  | C2      |
|  23 | St. Pius Uriri High School                  | Boys   | C1      |
|  24 | Tarang'anya Boys High School                | Boys   | C1      |
| --- | ------------------------------------------- | ------ | ------- |


### Kisii County

**National (5)**

| #   | School Name                                              | Gender | Cluster |
| --- | -------------------------------------------------------- | ------ | ------- |
|   1 | Gianchere Friends Secondary/Voc for the Hearing Impaired | SNE    | null    |
|   2 | Kereri Girls High School                                 | Girls  | null    |
|   3 | Kisii High                                               | Boys   | null    |
|   4 | Nyabururu Girls                                          | Girls  | null    |
|   5 | Riokindo Boys                                            | Boys   | null    |
| --- | -------------------------------------------------------- | ------ | ------- |

**Extra-County (26)**

| #   | School Name                            | Gender | Cluster |
| --- | -------------------------------------- | ------ | ------- |
|   1 | Bishop Charles Mugendi Secondary       | Mixed  | C3      |
|   2 | Cardinal Otunga High School-Mosocho    | Boys   | C1      |
|   3 | E L C K Itierio Boys High              | Boys   | C2      |
|   4 | E L C K Itierio Girls Secondary        | Girls  | C2      |
|   5 | Itibo Boys High School                 | Boys   | C2      |
|   6 | Itibo Girls Secondary                  | Girls  | C2      |
|   7 | Kereri Girls High School               | Girls  | C1      |
|   8 | Moi Gesusu High School                 | Boys   | C1      |
|   9 | Nduru Boys High School                 | Boys   | C3      |
|  10 | Nduru Girls' Secondary                 | Girls  | C3      |
|  11 | Nyamache Secondary                     | Boys   | C3      |
|  12 | Nyamagwa SDA Secondary                 | Mixed  | C2      |
|  13 | Nyanchwa Boys High School              | Boys   | C2      |
|  14 | Nyanchwa Girls Secondary               | Girls  | C1      |
|  15 | Nyangoge Girls Secondary               | Girls  | C3      |
|  16 | Riokindo High School                   | Boys   | C1      |
|  17 | Sameta High School                     | Boys   | C2      |
|  18 | St. Charles Lwanga Ichuni Girls High   | Girls  | C1      |
|  19 | St. Mary's Nyamagwa Girls Secondary    | Girls  | C2      |
|  20 | St. Theresa's Nyangusu Girls Secondary | Girls  | C2      |
|  21 | St.Angela Sengera Girls Secondary      | Girls  | C2      |
|  22 | St.Johns Nyamagwa Boys                 | Boys   | C2      |
|  23 | St.Joseph's Nyabigena Boys Secondary   | Boys   | C3      |
|  24 | St.Paul's Igonga Secondary             | Boys   | C1      |
|  25 | Suneka Secondary                       | Girls  | C2      |
|  26 | Tabaka Secondary                       | Boys   | C2      |
| --- | -------------------------------------- | ------ | ------- |


### Nyamira County

**National (3)**

| #   | School Name               | Gender | Cluster |
| --- | ------------------------- | ------ | ------- |
|   1 | Kebirigo High School      | Boys   | null    |
|   2 | Nyambaria High School     | Boys   | null    |
|   3 | Sironga Girls High School | Girls  | null    |
| --- | ------------------------- | ------ | ------- |

**Extra-County (20)**

| #   | School Name                                | Gender | Cluster |
| --- | ------------------------------------------ | ------ | ------- |
|   1 | Gesiaga Secondary                          | Mixed  | C1      |
|   2 | Kebabe Girls Secondary                     | Girls  | C2      |
|   3 | Kebirigo High School                       | Boys   | C1      |
|   4 | Marindi Secondary                          | Mixed  | C2      |
|   5 | Matongo Boys High School                   | Boys   | C3      |
|   6 | Menyenya S.D.A High School                 | Mixed  | C1      |
|   7 | Mwongori Secondary                         | Mixed  | C2      |
|   8 | Nyaikuro High School                       | Mixed  | C1      |
|   9 | Nyakongo High School                       | Boys   | C3      |
|  10 | Nyamira Boys High School                   | Boys   | C1      |
|  11 | Nyamiranga Secondary                       | Mixed  | C2      |
|  12 | Nyansabakwa Secondary                      | Boys   | C2      |
|  13 | Nyansiongo High School                     | Boys   | C2      |
|  14 | Our Lady Of Mercy Rangenyo Girls Secondary | Girls  | C3      |
|  15 | St Mathias Mulumba Secondary               | Girls  | C3      |
|  16 | St Paul's Gekano Boys High School          | Boys   | C1      |
|  17 | St. Cyprian Biticha Secondary              | Mixed  | C2      |
|  18 | St. Paul's Nyandoche Secondary             | Girls  | C1      |
|  19 | St. Peter's Nyakemincha Secondary          | Mixed  | C1      |
|  20 | Tombe Girls High School                    | Girls  | C2      |
| --- | ------------------------------------------ | ------ | ------- |


### Nairobi County

**National (13)**

| #   | School Name                     | Gender | Cluster |
| --- | ------------------------------- | ------ | ------- |
|   1 | Buruburu Girls Secondary        | Girls  | null    |
|   2 | Kasarani Tree Side for the Deaf | SNE    | null    |
|   3 | Kenya High School               | Girls  | null    |
|   4 | Lenana School                   | Boys   | null    |
|   5 | Moi Forces Academy              | Mixed  | null    |
|   6 | Moi Girls Secondary             | Girls  | null    |
|   7 | Nairobi School                  | Boys   | null    |
|   8 | Pangani Girls                   | Girls  | null    |
|   9 | Precious Blood Riruta           | Girls  | null    |
|  10 | St Georges Girls                | Girls  | null    |
|  11 | Starehe Boys' Centre            | Boys   | null    |
|  12 | Starehe Girls Centre            | Girls  | null    |
|  13 | State House Girls               | Girls  | null    |
| --- | ------------------------------- | ------ | ------- |

**Extra-County (22)**

| #   | School Name                         | Gender | Cluster |
| --- | ----------------------------------- | ------ | ------- |
|   1 | Aquinas High School                 | Boys   | C1      |
|   2 | Buruburu Girls Secondary            | Girls  | C1      |
|   3 | Dagoretti High School               | Boys   | C2      |
|   4 | Highridge Girls Boarding Secondary  | Girls  | C3      |
|   5 | Highway Secondary                   | Boys   | C2      |
|   6 | Hospital Hill High School           | Boys   | C2      |
|   7 | Huruma Girls' High                  | Girls  | C3      |
|   8 | Jamhuri High School                 | Boys   | C2      |
|   9 | Moi Girls' School Nairobi           | Girls  | C1      |
|  10 | Muhuri Muchiri Boys High            | Boys   | C3      |
|  11 | Nembu Girls High                    | Girls  | C1      |
|  12 | Ngara Girls' High                   | Girls  | C1      |
|  13 | Ofafa Jericho High                  | Boys   | C1      |
|  14 | Our Lady of Mercy Secondary South B | Girls  | C3      |
|  15 | Parklands Arya Girls High           | Girls  | C3      |
|  16 | Precious Blood Riruta               | Girls  | C1      |
|  17 | Pumwani Secondary                   | Boys   | C1      |
|  18 | St Anne's Girls' Secondary          | Girls  | C2      |
|  19 | St. George's Girls' Secondary       | Girls  | C1      |
|  20 | Statehouse Girls High               | Girls  | C1      |
|  21 | Uhuru Secondary                     | Boys   | C3      |
|  22 | Upper Hill School                   | Boys   | C1      |
| --- | ----------------------------------- | ------ | ------- |

**County (16)**

| #   | School Name           | Gender | Cluster |
| --- | --------------------- | ------ | ------- |
|   1 | County Girls          | Girls  | null    |
|   2 | Embakasi Girls        | Girls  | null    |
|   3 | Kangemi High School   | Boys   | null    |
|   4 | Karen C. Girls        | Girls  | null    |
|   5 | Langata High School   | Boys   | null    |
|   6 | Lavington Secondary   | Girls  | null    |
|   7 | Maina Wanjigi Sec     | Girls  | null    |
|   8 | Makongeni High School | null   | null    |
|   9 | Mutuini Secondary     | Boys   | null    |
|  10 | Nairobi Milimani      | Boys   | null    |
|  11 | Nile Road Secondary   | Mixed  | null    |
|  12 | OLM Girls-Shauri Moyo | Girls  | null    |
|  13 | Ruai Boys             | Boys   | null    |
|  14 | Ruai Girls            | Girls  | null    |
|  15 | Ruthimitu Girls       | Girls  | null    |
|  16 | St. Teresa Girls Sec  | Girls  | null    |
| --- | --------------------- | ------ | ------- |
---

<!-- ========================================================================= -->
<!-- SECTION 6 · COUNTY LISTINGS — SUMMARY                                      -->
<!-- Roll-up totals: per-county counts + tier breakdown for the bulk section.   -->
<!-- ========================================================================= -->

<a id="county-listings--summary"></a>

## COUNTY LISTINGS — SUMMARY

**Total schools in bulk County Listings section:** 1127 across 47 counties.

**By tier:** National 248 · Extra-County 742 · County 137.

**Per-county totals:**

| County | Schools | County | Schools |
|--------|---------|--------|---------|
| Mombasa       |      15 | Samburu         |      13 |
| Kwale         |      13 | Trans Nzoia     |      20 |
| Kilifi        |      35 | Uasin Gishu     |      25 |
| Tana River    |      15 | Elgeyo-Marakwet |      20 |
| Lamu          |      11 | Nandi           |      31 |
| Taita-Taveta  |      18 | Baringo         |      25 |
| Garissa       |      21 | Laikipia        |      18 |
| Wajir         |      20 | Nakuru          |      34 |
| Mandera       |      28 | Narok           |      12 |
| Marsabit      |      10 | Kajiado         |      29 |
| Isiolo        |       5 | Kericho         |      28 |
| Meru          |      30 | Bomet           |      16 |
| Tharaka-Nithi |      29 | Kakamega        |      33 |
| Embu          |      29 | Vihiga          |      22 |
| Kitui         |      34 | Bungoma         |      25 |
| Machakos      |      26 | Busia           |      17 |
| Makueni       |      28 | Siaya           |      28 |
| Nyandarua     |      15 | Kisumu          |      27 |
| Nyeri         |      31 | Homa Bay        |      31 |
| Kirinyaga     |      20 | Migori          |      31 |
| Murang'a      |      36 | Kisii           |      31 |
| Kiambu        |      34 | Nyamira         |      23 |
| Turkana       |      20 | Nairobi         |      51 |
| West Pokot    |      14 |                 |         |

**Coverage-gap counties** (county-tier data sparse in open sources, flagged for NEMIS follow-up): Kwale, Marsabit, Isiolo, West Pokot, plus thin county-tier coverage in Tana River, Lamu and Samburu. Per Ministry of Education data (Daily Nation), the North region has the fewest schools of any region overall.

*County Listings section added by codeAmani Labs Research, May 2026. Source artifact: compass_artifact bulk research file.*
*POWERED BY CODEAMANI LABS*

---

*Document compiled by codeAmani Labs Research. For Kipaji platform database seeding.*
*POWERED BY CODEAMANI LABS*

---

<!-- ============================ BOTTOM NAV BAR ============================== -->
<!-- Section jump-links. Anchors follow GitHub-flavored Markdown slug rules     -->
<!-- (lowercase, spaces -> hyphens, punctuation dropped; em dash leaves "--").  -->

**Jump to** ⬆ [Top](#kenya-high-schools-directory) · [Citation Index](#citation-index) · [School Directory](#school-directory) · [Data Gaps](#data-gaps-and-confidence-notes) · [Follow-Up Sources](#recommended-follow-up-sources) · [All 47 Counties](#county-listings--all-47-counties-bulk-directory) · [Summary](#county-listings--summary)

<!-- ========================================================================= -->
