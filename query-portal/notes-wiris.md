## Centres amb Wiris activat/desactivat

- 1855 centres amb el filtre wiris desactivat
- 539 centres amb el filtre wiris activat

```sql
SELECT active FROM m2filter_active WHERE filter='wiris'
```
 
## Preguntes tipus Wiris als qüestionaris

Total: 281.836 preguntes
- essaywiris: 732
- matchwiris: 3.290
- multianswerwiris: 36.098
- multichoicewiris: 18.893
- shortanswerwiris: 220.218
- truefalsewiris: 2.605

```sql
select count(*) from m2question where qtype='essaywiris'
select count(*) from m2question where qtype='matchwiris'
select count(*) from m2question where qtype='multianswerwiris'
select count(*) from m2question where qtype='multichoicewiris'
select count(*) from m2question where qtype='shortanswerwiris'
select count(*) from m2question where qtype='truefalsewiris'
```
 
## Ús del complement de Wiris a l’ATTO

Total: 1.516 fórmules

```sql
select count(*) from m2assign where intro like '%math xmlns%'
select count(*) from m2assignfeedback_comments where commenttext like '%math xmlns%'
select count(*) from m2choice where intro like '%math xmlns%'
select count(*) from m2forum where intro like '%math xmlns%'
select count(*) from m2forum_posts where message like '%math xmlns%'
select count(*) from m2glossary_entries where definition like '%math xmlns%'
select count(*) from m2label where intro like '%math xmlns%'
select count(*) from m2lesson where intro like '%math xmlns%'
select count(*) from m2lesson_answers where answer like '%math xmlns%'
select count(*) from m2lesson_attempts where useranswer like '%math xmlns%'
select count(*) from m2lesson_pages where contents like '%math xmlns%'
select count(*) from m2quiz where intro like '%math xmlns%'
select count(*) from m2resource where intro like '%math xmlns%'
select count(*) from m2wiki where intro like '%math xmlns%'
select count(*) from m2wiki_pages where cachedcontent like '%math xmlns%'
select count(*) from m2wiki_versions where content like '%math xmlns%'
select count(*) from m2workshop where intro like '%math xmlns%'
select count(*) from m2workshop_submissions where content like '%math xmlns%'
select count(*) from m2workshopform_accumulative where description like '%math xmlns%'
```
