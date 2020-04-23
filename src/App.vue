<template>
  <div>
    <!-- Ростовы -->
    <div class="header">
      <h1>Ростовы</h1>
      <img src="https://24smi.org/public/media/resize/800x-/person/2018/02/09/gnyoianccufq-semia-rostovykh.jpg" alt="Ростовы фото">
    </div>
    <div class="tree rostovy">
      <ul>
        <li>
          <a href="#" @click="showGraf = !showGraf">Граф Ростов</a>
          <br>
          <a href="#" @click="showGrafinya = !showGrafinya" style="margin-top: 5px;">Графиня Ростова</a>
          <ul>
            <li>
              <a href="#" @click="showVera = !showVera">Вера Ростова</a>
            </li>
            <li>
              <a href="#" @click="showNikolay = !showNikolay">Николай Ростов</a>
            </li>
            <li>
              <a href="#" @click="showNatasha = !showNatasha">Наташа Ростова</a>
            </li>
            <li>
              <a href="#" @click="showPetya = !showPetya">Петя Ростов</a>
            </li>
            <li>
              <a href="#" @click="showSonya = !showSonya">Соня</a>
            </li>
          </ul>
        </li>
      </ul>
    </div
    >
    <!-- Болконские -->
    <div class="header">
      <h1>Болконские</h1>
      <img src="https://na5.club/wp-content/auploads/905236/fullsize.jpg" style="width: 480px; height: 360px; border-radius: 10px;">
    </div>
    <div class="tree bolkonskie">
      <ul>
        <li>
          <a href="#" @click="showPrinceBalkonskiy = !showPrinceBalkonskiy">Князь Николай Болконский</a>
          <ul>
            <li>
              <a href="#" @click="showAndreyBalkonskiy = !showAndreyBalkonskiy">Князь Андрей Болконский</a>
              <ul>
                <li>
                  <a href="#" @click="showLizaBalkonskaya = !showLizaBalkonskaya">Лиза Болконская</a>
                  <ul>
                    <li>
                      <a href="#" @click="showNikolenkaBalkonskiy = !showNikolenkaBalkonskiy">Николенька Болконский</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" @click="showMariaBalkonskaya = !showMariaBalkonskaya">Княжна Марья</a>
            </li>
            <li>
              <a href="#" @click="showBurienBalkonskaya = !showBurienBalkonskaya">Мадемуазель Бурьен</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Курагины -->
    <div class="header">
      <h1>Курагины</h1>
      <img style="width: 400px; height: 300px" src="https://m.media-amazon.com/images/M/MV5BNTZkZjEzNGQtN2ZiNy00MzE0LTg4YWMtMTIyMDRlM2JiYzFkXkEyXkFqcGdeQXVyMjcxNjI4NTk@._V1_SY300_CR116" alt="">
    </div>
    <div class="tree kuragini">
      <ul>
        <li>
          <a href="#" @click="showVasiliyKuragin = !showVasiliyKuragin">князь Василий Курагин</a>
          <br>
          <a href="#" style="margin-top: 5px;" @click="showAlinaKuragina = !showAlinaKuragina">Княгиня Алина Курагина</a>
          <ul>
            <li>
              <a href="#" @click="showElenKuragina = !showElenKuragina">Элен Курагина</a>
            </li>
            <li>
              <a href="#" @click="showAnatolKuragin = !showAnatolKuragin">Анатоль Курагин</a>
            </li>
            <li>
              <a href="#" @click="shoIpollitKuragin = !shoIpollitKuragin">Ипполит Курагин</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <at-modal v-model="showGraf" title="Граф Ростов">
      <img src="http://visualrian.ru/images/old_preview/36/09/360956_preview.jpg"
        style="width: 300px; height: 182px;; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Старый граф Ростов является одним из ярких положительных персонажей романа "Война и Мир" Толстого. Старый граф Илья Андреевич Ростов - отец семейства Ростовых. В семье Ростовых воспитывается пятеро детей: старшая дочь Вера Ростова, Николай Ростов, Наташа Ростова, Петя Ростов и приемная дочь Соня.</p>
    </at-modal>

    <at-modal v-model="showGrafinya" title="Графиня Ростова">
      <img src="https://s16.stc.all.kpcdn.net/share/i/12/10157559/inx960x640.jpg"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Один из женских образов романа Л.Н. Толстого "Война и мир", симпатичных автору. В молодости графиня вращалась в светском обществе, ее приглашали в салоны, и она была их желанным гостем. После замужества образ ее жизни меняется, она целиком посвящает себя мужу и детям. Мы знакомимся с героиней в тот момент, когда она уже является образцовой матерью семейства, полной сердечности, любви, доброты и такта.</p>
    </at-modal>

    <at-modal v-model="showVera" title="Вера Ростова">
      <img src="https://www.soyuz.ru/public/uploads/files/6/7189855/201804111943590f9f5ad80c.png"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Старшая дочь графини появляется в романе в возрасте 20 лет. Вера – красивая "девица". Этот эпитет сопровождает девушку по всему произведению. Красивая графиня производит неприятное впечатление, раздражает окружающих. Она презрительно улыбается, холодно говорит, спокойна в беседе. Вера рассматривает свою внешность и становится еще более уверенной и независимой. Женщина «несомненно хороша», но улыбка не украшает лицо, оно становится неестественным и неприятным. Красивая внешность – приятный голос. Все гармонично в образе девушки, но нет слов в описании, которые бы показали хорошее к ней отношение. Автор пишет отчуждено, где-то с сарказмом, частично с усмешкой. В большинстве строк заметно противопоставление Веры другим членам семьи. Как признается отец, в воспитании дочери графиня "намудрила", взяв за основу идеалы другой женщины – Марии Друбецкой.</p>
    </at-modal>

    <at-modal v-model="showNikolay" title="Николай Ростов">
      <img src="https://ais.rtl.de/galerie/2004503/krieg-und-frieden.jpg"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Перед читателем Николай предстает положительным персонажем не только с точки зрения характера, но и внешне. Цитаты из романа говорят о приятной внешности персонажа. Толстой называет его «красивым молодым человеком»,  одаривает его «открытым выражением лица». У него невысокий рост, красивые светлые волосы. На его лице всегда можно заметить восторженное выражение, которое вызывает ассоциации с детским восприятием мира. Его глаза излучают добро, улыбка открыта и искренна.</p>
    </at-modal>

    <at-modal v-model="showNatasha" title="Наташа Ростова">
      <img src="https://b1.culture.ru/c/303127.jpg"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Л. Н. Толстой описывает свою любимую героиню не как одну из самых ярких красавиц. Он и сам  заявляет, что она некрасива. Цитаты из романа подтверждают это: «Черноглазая, с большим ртом, некрасивая, но живая девочка». Но почему же великий писатель делает самую нежную героиню произведения некрасивой? Ответ прост, ведь с детства нам говорят о том, что истинная красота заключается не во внешности. Настоящей красотой Наташи является ее внутренний мир. Именно он противопоставляется холодной, пустой красоте светских барышень. Именно из-за богатого и красивого внутреннего мира Наташа становится объектом воздыхания многих мужчин.</p>
    </at-modal>

    <at-modal v-model="showPetya" title="Петя Ростов">
      <img src="https://pbs.twimg.com/media/D98J6qLW4AAcYcc.jpg:large"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Во время начала романа читатель мало что узнает о внешности Пети. Он был озорным ребенком, слегка полноватым. В возрасте 9 лет. Но к 13 Петя становится красивым мальчиком, который уже в пубертатном периоде отличается приятной внешностью. В 15 лет Петя расцветает еще больше. Автор упоминает, что он становится похожим на свою сестру Наташу – такой же курносый нос, вьющиеся волосы, выразительные и глубокие черные глаза. Голос подростка еще не до конца сломан, и иногда герой говорит писклявым голосом. Война сыграла роль для внешности парня – он стал более возмужавшим. На поле боя Петя через многое прошел, но его глаза оставались по-детски добрыми, излучали тепло и радость.</p>
    </at-modal>

    <at-modal v-model="showSonya" title="Соня">
      <img src="https://ichef.bbci.co.uk/images/ic/1200x675/p039x0j4.jpg"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Троюродная сестра детей Ростовых. В романе нет указаний на то, при каких обстоятельствах девушка оказывается в их доме. Соня – не просто сестра для главной героини. Она подруга Наташи. Девушка стремится помочь Ростовой, она удерживает ее от позора отношений с Курагиным. Соня обещает сидеть у дверей молодой графини и не выпускать ее из дома, не позволяет ей сбежать с Анатолем. Отношения между девушками открытые и искренние. Наташа плачет вместе с Соней, даже не вникая в причину. Горе подруги воспринимается как свое.</p>
    </at-modal>

    <at-modal v-model="showPrinceBalkonskiy" title="Князь Николай Балконский">
      <img src="https://i.pinimg.com/736x/bf/c2/f6/bfc2f68083daa680c05a84c73ac6b191.jpg"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Старый князь выглядит очень педантично, что передает основную черту его характера. Он невысок ростом, постоянно ходит в напудренном парике и старомодном кафтане. Характерной особенностью внешности Николая Балконского являются седые свисающие брови. Его руки иссушены старостью, но в глазах все еще присутствует молодецкий огонек. Важной особенностью внешнего облика героя является его манера двигаться. Его движения как-будто идут наперерез времени, которое в его имении тянется долго и медлительно. Он ходит быстро и стремительно, выражая все свое мировоззрение в резких, веселых, лихих движениях.</p>
    </at-modal>

    <at-modal v-model="showAndreyBalkonskiy" title="Князь Андрей Балконский">
      <img src="https://avatars.mds.yandex.net/get-pdb/1809151/07c8ff0d-cb4e-477a-8d17-683d36efe625/s1200?webp=false"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Андрей Болконский, один из любимых персонажей Льва Толстого, предстает перед читателем практически в начале романа. Характеристику Болконскому в романе «Война и мир» Толстой дает как одаренной натуре с богатым внутренним миром и обостренным чувством чести. Болконский – человек незаурядного ума, склонного к постоянному анализу как внешних, так и внутренних, душевных, событий. Не чуждый эгоизма вначале произведения, князь Андрей тяготеет к государственной деятельности, он жаждет славы и признания – но не для себя, а для блага русского народа. Этот запутавшийся, потерявший внутренний ориентир, но глубоко честный патриот и настоящий дворянин на протяжении всего произведения ищет себя самого, смысл жизни, ответы на те непростые вопросы, которые ставит перед ним текущая ситуация.</p>
    </at-modal>

    <at-modal v-model="showLizaBalkonskaya" title="Лиза Балконская">
      <img src="https://pbs.twimg.com/media/EL6O_sHXYAMs9HM.jpg"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Лиза родилась в довольно знатной семье. Дядей героини был сам Кутузов. С самого детства она росла «в свете», поэтому привыкла «к лучшему обществу». Героиня любит посещать различные балы, постоянно находиться в центре внимания. Внешность героини позволяла ей занимать хорошее положение в обществе. Всем она казалась милой и привлекательной девушкой. Лиза Болконская была любимицей света: «Всем было весело смотреть на эту полную здоровья и живости, хорошенькую будущую мать». Образ Лизы Болконской наиболее ярко характеризует светское общество, которое Л. Н. Толстой описывает иронично. Это люди, не имеющие достоинства и живущие, заботясь лишь о собственном благе. Жизнь Лизы Болконской была примитивна и ничего не представляла собой.</p>
    </at-modal>

    <at-modal v-model="showNikolenkaBalkonskiy" title="Николенька Балконский">
      <img src="https://tvercult.ru/wp-content/uploads/2019/03/boz2i4ig.jpg"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Вернувшись с войны раненым, князь Андрей застает роды сына, которые случаются прямо в день приезда. Молодой князь возвращается с войны с поменявшимися приоритетами. Он видит смысл жизни в любви, готов посвятить себя семейной жизни. Но в день рождения Николеньки умирает его мать, так и не дав возможность мужу вернуть в семью гармонию, любовь и понимание. Сразу после похорон матери, Николеньку крестили. Крестными родителями стали самые близкие люди – дед и тетушка крохи. Внешне малыш с самого рождения был очень похож на мать. У него были ее темные вьющиеся волосы, особенно ярко выдавала сходство верхняя губа. Николенька вобрал в себя все самое лучшее от родителей. От матери – внешность, от отца – характер, который сделает из него целеустремленного и умного ребенка.</p>
    </at-modal>

    <at-modal v-model="showMariaBalkonskaya" title="Княжна Мария">
      <img src="https://ruskino.ru/media/gallery/609/UFc2AEu3eC4dgBbcy1DVf92ZrX0.jpg"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Вернувшись с войны раненым, князь Андрей застает роды сына, которые случаются прямо в день приезда. Молодой князь возвращается с войны с поменявшимися приоритетами. Он видит смысл жизни в любви, готов посвятить себя семейной жизни. Но в день рождения Николеньки умирает его мать, так и не дав возможность мужу вернуть в семью гармонию, любовь и понимание. Сразу после похорон матери, Николеньку крестили. Крестными родителями стали самые близкие люди – дед и тетушка крохи. Внешне малыш с самого рождения был очень похож на мать. У него были ее темные вьющиеся волосы, особенно ярко выдавала сходство верхняя губа. Николенька вобрал в себя все самое лучшее от родителей. От матери – внешность, от отца – характер, который сделает из него целеустремленного и умного ребенка.</p>
    </at-modal>
    
    <at-modal v-model="showBurienBalkonskaya" title="Мадемуазель Бурьен">
      <img src="https://commonpoll.com/processed-images/1500x/5FuyztammacZFp4RjUgl51cmppkZNwB_.jpg"
        style="width: 300px; height: 182px; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Является одной из второстепенных героинь романа "Война и мир" Толстого. Молодая француженка мадемуазель Бурьен - это, по сути, один из членов семьи Болконских. Она много лет живет в качестве приживалки-компаньонки в семье Болконских. </p>
    </at-modal>

    <at-modal v-model="showVasiliyKuragin" title="Князь Василий Курагин">
      <img src="https://sochinenie-rus.ru/wp-content/uploads/2018/09/kuragin.jpg"
        style="width: 300px; height: 182px;; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Герой уважаем в светском обществе Москвы и Петербурга, его считают умным и порядочным человеком. Способность аккумулировать нужные связи привела в итоге героя к тому, что его считают очень влиятельным человеком и часто обращаются за помощью. Автор очень чётко описывает хитрость и изворотливый ум персонажа:”Но влияние в свете есть капитал, который надо беречь, чтоб он не исчез”.    “…ежели бы он стал просить за всех, кто его просит, то вскоре ему нельзя было бы просить за себя, он редко употреблял свое влияние”. Тот факт, что он служит при императорском дворе, делает его крайне востребованным в обществе, к его мнению прислушиваются, его красноречием восхищаются. Он умеет говорить и молчать, когда этого требует момент, его манеры, выработанные за много лет службы при дворе восхищают окружающих. Ежедневное вращение в высших кругах он использовал настолько мастерски, что стал обладателем чего-то более значимого, чем деньги. Это позволило ему устроить карьеры непутёвых детей, их браки, сгладить последствия проблем, которыми полна его жизнь, благодаря поведению отпрысков.</p>
    </at-modal>

    <at-modal v-model="showAlinaKuragina" title="Княгиня Алина Курагина">
      <img src="https://www.kino-teatr.ru/movie/kadr/1065/111390.jpg"
        style="width: 300px; height: 182px;; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Матери и старшему сыну семьи Курагиных выделено меньше всего читательского пространства. Лев Николаевич очень кратко рассмотрел этих героев. О княгине указывается только то, что она завидует дочери, ее браку с Пьером, красоте, общительности и светскому положению.</p>
    </at-modal>

    <at-modal v-model="shoIpollitKuragin" title="Ипполит Курагин">
      <img src="https://na5.club/wp-content/auploads/924217/anatol_kuragin.jpg"
        style="width: 300px; height: 182px;; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Ипполит работает в австрийском посольстве благодаря отцу. Он ведет светский образ жизни в Петербурге. Но друзья и другие офицеры постоянно его высмеивают. Впрочем, старший сын князя настолько глуп, что даже не осознает насмешек над ним, поддерживает издевательские шутки. Несмотря на невзрачную внешность, брюзгливость, не самое лучшее телосложение и нелепую одежду, он почему-то пользовался успехом у женщин, стал причиной ссор на основе ревности в разных семьях.</p>
    </at-modal>

    <at-modal v-model="showElenKuragina" title="Элен Курагина">
      <img src="https://avatars.mds.yandex.net/get-zen_doc/1540250/pub_5cfa8aeeb854e100b048d040_5cfa8c3ee77f2e00b01cdeb4/scale_1200"
        style="width: 300px; height: 182px;; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>В начале романа молодая красивая девушка, чья внешность приковывает взгляды. Ее красоту признают и женщины, и мужчины: «…Что за красавица! – говорил каждый, кто ее видел…». Мужчины ловили каждый ее взгляд, восхищались ей. Женщины старались держаться к ней поближе, ловя каждое ее движение, наблюдая за умением держаться в обществе.</p>
    </at-modal>

    <at-modal v-model="showAnatolKuragin" title="Анатоль Курагин">
      <img src="https://ichef.bbci.co.uk/images/ic/976x549_b/p03ccy5r.jpg"
        style="width: 300px; height: 182px;; margin: 0 auto; border-radius: 10px; display: flex; justify-content: center; margin-bottom: 10px;"
      >
      <p>Отец Анатоля – князь Василий, хитрый и расчётливый человек. Его моральное “наследство” передаётся всем троим детям. Удивительно красивый молодой юноша имеет пустую, безнравственную натуру. Он глупый и поверхностный человек, не имеет целей, ни  к чему не стремится, не уважает чувств других людей. Отсутствие настоящей человеческой теплоты, поддержки и любви в семье привело к тому, что Анатоль не умеет любить, он не привязывается к женщинам, они служат средством для развлечения. За ним числится множество разбитых сердец и судеб. Молодой человек воспитывался за границей, в том числе в Париже. Однако аристократическое воспитание и образование не помогло бестолковому сыну князя Василия – он постоянно попадает в неприятности, из которых отец вытаскивает чадо, оплачивает его долги, спасает репутацию.</p>
    </at-modal>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showGraf: false,
      showGrafinya: false,
      showVera: false,
      showNikolay: false,
      showNatasha: false,
      showPetya: false,
      showSonya: false,

      showPrinceBalkonskiy: false,
      showAndreyBalkonskiy: false,
      showLizaBalkonskaya: false,
      showNikolenkaBalkonskiy: false,
      showMariaBalkonskaya: false,
      showBurienBalkonskaya: false,

      showVasiliyKuragin: false,
      showAlinaKuragina: false,
      showElenKuragina: false,
      showAnatolKuragin: false,
      shoIpollitKuragin: false
    }
  }
}
</script>

<style>
* {margin: 0; padding: 0;}

.tree ul {
	padding-top: 20px; position: relative;
	
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
}

.tree li {
	float: left; text-align: center;
	list-style-type: none;
	position: relative;
	padding: 20px 5px 0 5px;
	
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
}

.tree li::before, .tree li::after{
	content: '';
	position: absolute; top: 0; right: 50%;
	border-top: 1px solid #ccc;
	width: 50%; height: 20px;
}
.tree li::after{
	right: auto; left: 50%;
	border-left: 1px solid #ccc;
}

.tree li:only-child::after, .tree li:only-child::before {
	display: none;
}

.tree li:only-child{ padding-top: 0;}

.tree li:first-child::before, .tree li:last-child::after{
	border: 0 none;
}

.tree li:last-child::before{
	border-right: 1px solid #ccc;
	border-radius: 0 5px 0 0;
	-webkit-border-radius: 0 5px 0 0;
	-moz-border-radius: 0 5px 0 0;
}
.tree li:first-child::after{
	border-radius: 5px 0 0 0;
	-webkit-border-radius: 5px 0 0 0;
	-moz-border-radius: 5px 0 0 0;
}

.tree ul ul::before{
	content: '';
	position: absolute; top: 0; left: 50%;
	border-left: 1px solid #ccc;
	width: 0; height: 20px;
}

.tree li a{
	border: 1px solid #ccc;
	padding: 5px 10px;
	text-decoration: none;
	color: #666;
	font-family: arial, verdana, tahoma;
	font-size: 11px;
	display: inline-block;
	
	border-radius: 5px;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
}

.tree li a:hover, .tree li a:hover+ul li a {
	background: #c8e4f8; color: #000; border: 1px solid #94a0b4;
}

.tree li a:hover+ul li::after, 
.tree li a:hover+ul li::before, 
.tree li a:hover+ul::before, 
.tree li a:hover+ul ul::before{
	border-color:  #94a0b4;
}

.rostovy {
  display: flex;
  justify-content: center;
  margin-top: 270px;
}

.header {
  display: flex;
  justify-content: center;
  margin: 40px 0;
}

.header img {
  display: flex;
  justify-content: center;
  height: 310px;
  width: 213px;
  border-radius: 10px;
  padding-top: 50px;
  position: absolute;
}

.bolkonskie {
    display: flex;
    justify-content: center;
    margin-top: 320px;
}

.kuragini {
  display: flex;
  justify-content: center;
  margin-top: 260px;
  margin-bottom: 100px;
}

</style>
