tf.ready().then( async ()=>{

    let data = `i,1
either,2
love,3
brokeback,4
mountain,5
or,6
think,7
its,8
great,9
that,10
homosexuality,11
is,12
becoming,13
more,14
acceptable,15
da,16
vinci,17
code,18
up,19
down,20
left,21
right,22
b,23
a,24
suck,25
it,26
just,27
me,28
does,29
harry,30
potter,31
hate,32
because,33
outshines,34
much,35
better,36
reading,37
material,38
out,39
there,40
and,41
the,42
movies,43
are,44
plain,45
stupid,46
to,47
begin,48
with,49
heard,50
sucked,51
soo,52
only,53
25,54
stars,55
was,56
an,57
awesome,58
movie,59
really,60
did,61
on,62
must,63
of,64
been,65
like,66
time,67
at,68
when,69
we,70
them,71
in,72
as,73
sit,74
here,75
watching,76
mtv,77
awards,78
am,79
reminded,80
how,81
despised,82
beautiful,83
liked,84
first,85
mission,86
impossible,87
these,88
hes,89
likeyeah,90
got,91
acne,92
you,93
never,94
know,95
whos,96
side,97
loved,98
oh,99
terrible,100
sucks,101
by,102
way,103
letting,104
man,105
story,106
deep,107
profound,108
one,109
people,110
who,111
worth,112
pretty,113
going,114
start,115
series,116
again,117
kirsten,118
leah,119
kate,120
escapades,121
tom,122
well,123
said,124
2,125
rocks,126
book,127
so,128
depressing,129
absolutely,130
daniel,131
wotshisface,132
needs,133
fucking,134
slap,135
always,136
knows,137
what,138
want,139
not,140
guy,141
crazy,142
hates,143
ass,144
would,145
make,146
friends,147
same,148
things,149
thought,150
joining,151
community,152
this,153
be,154
good,155
wanted,156
desperately,157
lovethe,158
film,159
luv,160
lubb,161
still,162
retarted,163
gay,164
theres,165
black,166
picture,167
but,168
my,169
character,170
he,171
cool,172
hear,173
were,174
gonna,175
watch,176
hoot,177
3,178
excellent,179
horrible,180
no,181
his,182
while,183
get,184
see,185
which,186
little,187
bit,188
may,189
do,190
have,191
will,192
try,193
can,194
friday,195
hung,196
kelsie,197
went,198
saw,199
cant,200
wait,201
read,202
im,203
even,204
through,205
hated,206
dudeee,207
boring,208
dont,209
care,210
if,211
anyone,212
says,213
differently,214
sad,215
real,216
life,217
dads,218
being,219
about,220
too,221
last,222
stand,223
both,224
anyway,225
books,226
most,227
ever,228
after,229
seeing,230
crappy,231
thing,232
shit,233
type,234
person,235
likes,236
main,237
dies,238
count,239
also,240
catcher,241
tye,242
jane,243
eyre,244
virgin,245
suicides,246
yeah,247
thats,248
why,249
for,250
iii,251
then,252
snuck,253
into,254
seen,255
glad,256
sentry,257
station,258
bonkers,259
should,260
all,261
sure,262
since,263
ill,264
big,265
s,266
felicias,267
mom,268
cleaning,269
table,270
felicia,271
grabs,272
keys,273
dash,274
freakin,275
say,276
three,277
sick,278
kids,279
she,280
helped,281
bobbypin,282
insanely,283
hat,284
head,285
laughed,286
cowboy,287
jokes,288
though,289
feel,290
bad,291
go,292
theater,293
money,294
doing,295
looks,296
dragged,297
draco,298
malfoy,299
trousers,300
past,301
hips,302
him,303
throat,304
vigor,305
making,306
whimpering,307
noises,308
panting,309
groaning,310
around,311
blonds,312
rockhard,313
aching,314
cock,315
place,316
where,317
take,318
serious,319
fun,320
used,321
lol,322
they,323
totally,324
quiz,325
ok,326
bye,327
such,328
combining,329
opinion,330
review,331
from,332
gary,333
gin,334
zen,335
very,336
fact,337
might,338
awful,339
silent,340
hill,341
turned,342
reality,343
coz,344
hella,345
goin,346
bitch,347
betterwe,348
bogus,349
inaccurate,350
had,351
crap,352
now,353
hey,354
times,355
already,356
far,357
evil,358
anything,359
than,360
amazing,361
wrong,362
tell,363
over,364
new,365
talk,366
talking,367
stories,368
kind,369
school,370
world,371
enjoy,372
before,373
lot,374
theme,375
best,376
novel,377
angels,378
demons,379
fandom,380
everyone,381
cowboys,382
apparently,383
two,384
id,385
sucking,386
off,387
our,388
told,389
has,390
some,391
few,392
days,393
news,394
didnt,395
miss,396
crash,397
won,398
us,399
back,400
song,401
interesting,402
balls,403
ive,404
could,405
other,406
night,407
those,408
something,409
else,410
every,411
god,412
personally,413
lost,414
quite,415
their,416
enjoyed,417
cruise,418
probably,419
end,420
made,421
year,422
actually,423
show,424
least,425
havent,426
kinda,427
yet,428
having,429
action,430
youre,431
your,432
day,433
saying,434
long,435
watched,436
officially,437
second,438
mean,439
finished,440
freaking,441
thinking,442
fan,443
lord,444
rings,445
until,446
okay,447
xmen,448
doesnt,449
almost,450
course,451
give,452`;


async function loadModel(){
    return await tf.loadLayersModel("http://127.0.0.1:5500/models/model.json");
}

function process(txt){
    let out = txt.replace(/[^a-zA-Z0-9\s]/ , '');
    out = out.trim().split(/\s+/);
    for (var i = 0 ; i < out.length ; i++){
        out[i] = out[i].toLowerCase();
    }

    return out ;
}

function word_index(){
    var wd_idx = new Object();
    let lst = data.split(/\r?\n|\r/);

    for (var i = 0 ; i < lst.length; i++){
        let key = (lst[i]).split(",")[0];
        let value = (lst[i]).split(",")[1];

        if(key=="")
            continue

        wd_idx[key] = parseInt(value);
    }
    word_idx = wd_idx 
}
function create_sequence(txt){
    let max_token = 40;
    let tokens = [];

    let words = process(txt);
    console.log(words)
    let seq = Array.from(Array(max_token),()=>0)

    start = max_token - words.length;

    for(var i = 0 ; i < words.length; i++){
        if (Object.keys(word_idx).includes(words[i])){
            seq[i+start] = word_idx[words[i]]
        }
    }

    return seq

}
let word_idx = undefined
word_index()
let model = await loadModel();

let txt = "it's bad movie ";
let seq = create_sequence(txt);
let input = tf.tensor(seq);
input = input.expandDims(0);

let pred = model.predict(input);
pred.print();
});