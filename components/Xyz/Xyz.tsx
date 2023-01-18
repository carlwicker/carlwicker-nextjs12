import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Xyz() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(sectionRef.current, {
      opacity: 1,
      // transform: "rotate3d(4,4,1,30deg)",
      duration: 0.2,
      scale: 1,
    });
  }, [sectionRef]);

  return (
    <div className="overflow-hidden absolute top-0 left-0  bg-black mix-blend-screen  ">
      <div
        data-scroll
        data-scroll-speed="5"
        ref={sectionRef}
        // style={{ transform: "rotate3d(4,4,1,30deg)" }}
        className="w-full h-[100vh] flex align-middle justify-center font-extrabold text-[20px] text-white uppercase leading-none break-all "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum assumenda
        est odit sint natus eius nostrum sed veritatis nisi ab? Rerum,
        quibusdam. Numquam, accusamus! Vitae natus quas laudantium commodi
        corrupti. Dolores itaque omnis veniam ex similique porro inventore
        voluptatem qui, necessitatibus deserunt ab libero ratione praesentium
        odio sint ea voluptas quidem totam aliquid. Asperiores maiores ex,
        quaerat accusantium officia quidem. Exercitationem praesentium corporis
        quam amet commodi reiciendis facilis autem excepturi mollitia. Quibusdam
        architecto fugiat fugit provident, omnis recusandae aliquam iure sed
        delectus adipisci molestiae! Aperiam rerum eum modi rem placeat!
        Nesciunt recusandae distinctio, quasi aut, quas eos fuga quidem aperiam
        debitis facilis reiciendis inventore ea velit assumenda voluptate
        eveniet. Quis odit iusto natus facere accusantium dolorem quos eligendi
        qui possimus? Doloribus eos fugit delectus earum accusamus laborum
        reiciendis non excepturi, ducimus laudantium quaerat quasi explicabo
        dolorum! Suscipit exercitationem accusantium minima odit autem. Totam
        deleniti provident impedit, ipsum excepturi adipisci cupiditate. Dolor
        vitae beatae est asperiores, quidem consequuntur optio, deleniti
        voluptate repudiandae doloribus facere iste ea ducimus omnis! Architecto
        iste est nulla obcaecati ex sunt atque similique nobis ratione.
        Perspiciatis, totam. Totam, quidem excepturi blanditiis voluptas dolores
        iste ipsum quibusdam cupiditate consequuntur optio, eaque minima quia
        molestiae ullam atque provident molestias commodi enim. Eaque harum
        mollitia tempore et maxime quis delectus. Harum nesciunt excepturi autem
        corrupti, quidem cupiditate suscipit provident vel culpa laudantium
        expedita dolorem, incidunt maxime ad magni molestiae fuga minus rem
        neque perferendis? Magnam quis ipsa iure dolorum ab? Inventore earum
        facilis dolorum, fugiat id voluptate eum ex esse aperiam, commodi
        maiores ut at rerum ducimus consectetur. Dolorem rem assumenda quas
        quisquam id quo aliquid voluptas facere minus blanditiis. Odit ratione
        deserunt nemo cum, laborum ullam nam ducimus perspiciatis cupiditate
        officiis, illum accusantium illo voluptates temporibus optio veniam.
        Optio nam magni, sequi minus velit repellendus? Laudantium voluptas
        autem id! Sunt cum quisquam labore nulla accusamus quidem nostrum
        consequuntur earum dicta rerum. Dolorum culpa error ad harum ea
        similique voluptatibus totam eligendi facilis? Aperiam, molestiae.
        Laboriosam sequi accusantium veritatis esse. Libero excepturi corporis
        laboriosam cumque recusandae amet dolorum explicabo placeat fugiat
        quaerat voluptas vel, fuga ducimus quidem totam ullam rem dicta
        blanditiis nesciunt ab aliquid! Expedita quo temporibus odit excepturi.
        Minus animi, harum placeat eum inventore quos a quis modi! Quae tempore
        quidem reiciendis recusandae exercitationem magnam, autem, ipsum
        repellat quasi minus fugiat dolor eum alias impedit dicta libero error.
        Quisquam labore commodi quae, aperiam nisi harum perspiciatis esse quia
        est excepturi, minima autem nostrum distinctio sapiente possimus impedit
        dicta tempore! Eius veniam sint earum repellendus a nesciunt quam
        facere. Fugit hic vel architecto repudiandae, repellat, nihil non neque
        possimus pariatur perferendis tempora, esse ut vero illum quidem ipsam
        odio voluptatum sequi perspiciatis quae eius magni quos nemo! In,
        veritatis! Pariatur, sequi nostrum, ullam in quidem voluptatum a
        veritatis tenetur perferendis aut, corporis corrupti facilis labore quis
        ipsam recusandae? Voluptas quaerat in blanditiis amet magni facilis
        dicta itaque enim exercitationem. Facilis, sapiente labore? Labore sequi
        in nihil harum architecto voluptatibus fuga reiciendis molestiae dolore
        nobis ratione totam quidem, provident nesciunt, esse molestias placeat
        facere excepturi assumenda officiis optio, sapiente possimus! Soluta
        ipsa veritatis, quia, vel fuga totam sint nulla velit possimus quos
        ipsum, voluptates fugiat illo iusto eius esse? Nihil labore repellat
        accusantium laudantium ipsam perspiciatis similique nemo temporibus ut.
        Quidem vitae explicabo, exercitationem facere a, sit fugiat itaque
        voluptas architecto quod, nihil quaerat omnis corporis sint ea in
        repellendus rerum modi! Alias reprehenderit nihil porro? Deserunt vitae
        veniam cum. Facere tempora atque iure sequi earum repudiandae ab
        perspiciatis odit error aut minus perferendis quae maxime quibusdam
        aliquid, aspernatur quisquam similique, illo ipsum distinctio
        praesentium sed vel dolorum? Sed, in! Maiores, amet deleniti maxime
        assumenda nam at voluptatum temporibus et. Minus qui libero ratione
        voluptate est voluptas maxime alias, cumque sed pariatur nemo
        praesentium autem explicabo beatae, perspiciatis quaerat quis. Nulla,
        officia. Quo, optio suscipit. Sed dolorem cum reprehenderit eligendi
        architecto, voluptatibus blanditiis eveniet vel, deleniti delectus
        nostrum voluptate quisquam! Dignissimos esse quia corrupti alias odio
        eos iusto repudiandae aut? Obcaecati excepturi ipsum cupiditate
        temporibus accusamus ducimus nesciunt voluptates id rem commodi ratione
        aliquid voluptas doloremque voluptatum aliquam non, aut facilis
        perferendis nulla reiciendis, maxime odio, facere tempora. Ad, nobis!
        Officia amet, nulla quae enim voluptas corrupti quidem a totam, omnis
        necessitatibus ut minima aut at ab velit numquam accusamus fugiat
        repudiandae voluptate rerum sit. Iste illum sint perferendis excepturi.
        Expedita, libero? Blanditiis, et, cupiditate temporibus quaerat repellat
        quis vel aut nihil ea cumque eum natus distinctio provident saepe
        incidunt? Blanditiis doloremque ad delectus corrupti, harum libero
        perspiciatis! Praesentium, veniam. Perspiciatis soluta eius facere
        corrupti totam rerum voluptates mollitia distinctio sunt dolorem impedit
        sapiente nesciunt, corporis vel accusantium molestias ex repudiandae
        quasi cumque, architecto eum consectetur ipsum? Provident, odit. Fugiat?
        Non, in! Architecto corrupti minima et quidem eligendi nostrum commodi
        dolorum, quibusdam corporis beatae, nobis, temporibus distinctio veniam
        tenetur eum impedit voluptatum quam esse velit accusamus optio enim.
        Accusamus, ducimus! Doloremque nam expedita iure ducimus dolorum
        provident, labore rerum perspiciatis sed perferendis ratione quos
        deserunt. Veritatis tempore, vero numquam temporibus eum saepe, quo
        cupiditate quia, recusandae odio laboriosam officia velit. Tempore
        incidunt natus aspernatur ullam doloribus. In quo quibusdam dolores
        quaerat! Ea, cum recusandae officia tenetur nisi pariatur, repellendus
        non quaerat error nam at. Harum, aliquid dicta. Natus, eius quidem?
        Maiores, non beatae architecto saepe voluptatem sapiente fuga mollitia
        laudantium repellendus vero repellat voluptate, totam voluptatum iste a!
        Sit saepe molestias, voluptas cumque quaerat vero error praesentium hic
        sint ipsam. Sit nesciunt quam possimus aperiam laboriosam, modi
        quisquam. Fugiat quam ex optio provident sed corporis! Dicta veritatis,
        corporis voluptatum velit sed sunt? Pariatur, suscipit laudantium eos
        praesentium obcaecati nesciunt dolore. Illum eaque distinctio sed
        nesciunt amet aliquam corporis minima laborum quidem aliquid quos
        explicabo sit, cum est. Possimus consequatur a voluptatibus tempore
        excepturi repudiandae minus at animi, distinctio, soluta aliquid. Quam
        dicta earum autem fuga, nihil eaque placeat? Quis voluptate fugiat eos
        dolorem placeat assumenda animi saepe minima, veritatis sapiente ipsa
        nobis esse dolores iste dignissimos necessitatibus doloremque sed.
        Impedit. Nostrum quos cumque obcaecati aut laudantium, nulla quam rem,
        ut accusamus dolorum aliquid id ea voluptates nobis tenetur soluta,
        quasi nemo assumenda! Ipsum tempore et, illum quisquam doloribus
        voluptatem minus. Autem praesentium debitis obcaecati natus voluptatum
        dicta, nihil repudiandae assumenda. Molestiae perferendis eum eos sed
        quo quas molestias recusandae fuga iusto culpa. Similique, animi
        assumenda. Quaerat tenetur veniam quo possimus? Molestiae perspiciatis
        asperiores quo dignissimos nihil optio maxime molestias obcaecati sequi
        cumque, alias corporis ullam, fuga perferendis sed architecto fugiat at
        repellat quaerat ipsam quis est consequatur qui quae. Et. Assumenda,
        repellendus alias obcaecati earum consequuntur omnis atque enim impedit
        architecto sint eaque iste aliquid dicta exercitationem, voluptate odit
        aut. Dolores eveniet repudiandae quos reprehenderit facilis accusamus
        voluptatibus recusandae impedit! Reprehenderit praesentium asperiores
        nesciunt dolore! Amet, facere modi. Enim saepe ipsa provident eligendi
        magnam rem, quod eaque, eum facere dolore dicta? Perspiciatis hic omnis
        impedit velit non quisquam, nesciunt rem. Aspernatur odit asperiores
        autem similique consequatur! Ab provident velit ex laboriosam cum ad,
        repudiandae nostrum, aliquam ratione, blanditiis voluptates obcaecati
        quam reprehenderit hic nihil? Similique autem facilis commodi officia
        magni! Animi distinctio neque cumque atque fugit aut amet perferendis
        ullam harum laborum debitis illo delectus voluptates tempora nihil
        corrupti saepe, quo fugiat totam, placeat laboriosam sed dicta? Modi,
        fugit quos. Ipsum obcaecati culpa quas nihil commodi cumque autem, ullam
        adipisci recusandae nulla, harum similique consequatur. Iure sed beatae
        quam perferendis laborum totam nulla, dolore aspernatur quia consectetur
        adipisci doloremque soluta. Commodi sint velit earum? Enim ipsum commodi
        officia, rem tempore id quod beatae molestiae numquam eius impedit
        itaque eum eos maiores perferendis illum harum error dolorem aperiam
        labore facilis consequatur. Aspernatur velit laudantium, atque quae odio
        nam commodi, fuga, sit laboriosam nulla nemo repellat esse temporibus
        neque! Commodi cumque cupiditate, dolore aperiam, animi a atque laborum
        eum sed inventore est! Quod praesentium mollitia iusto ducimus
        voluptates alias impedit cumque. Praesentium quo itaque eos, maxime ab
        sunt, voluptates in quae totam quisquam impedit delectus minus dolor
        illo ea minima aperiam repellendus. Aut blanditiis magni dolor nihil
        commodi facere? Non nihil nulla officiis! Blanditiis iusto quidem
        reiciendis aliquid consequuntur! Enim, dignissimos ad cupiditate cum
        repellat officia. Cupiditate beatae voluptates exercitationem excepturi
        corporis? Quibusdam laudantium fugiat consequuntur quos ipsum molestias
        amet sit magnam incidunt vel optio laborum sunt corrupti reprehenderit,
        autem sed mollitia non. Eaque expedita, nihil explicabo nulla suscipit
        ratione mollitia quas. Vel debitis ab adipisci! Doloribus aut id debitis
        officia iste delectus, veritatis unde harum earum rerum quasi officiis
        tempora expedita repellendus magni, hic dolorum minus soluta excepturi
        saepe totam maxime. Voluptate, eum? Reiciendis odit voluptatum
        exercitationem placeat tempora qui labore tenetur vel, nemo ad eligendi,
        at itaque autem. Ex officia recusandae corporis! Sapiente officiis
        placeat doloremque tenetur cum id quisquam! At beatae aliquid in
        eveniet, placeat fugit numquam sed quibusdam accusantium impedit omnis
        neque, ut dolores sunt veniam. Tempore vero maiores commodi vel
        aspernatur expedita laboriosam asperiores quod adipisci temporibus?
        Consectetur, sequi. Porro, voluptate. Esse consectetur ex perferendis
        facilis accusamus nihil nemo numquam quod aperiam unde dolorum
        doloribus, adipisci magni. Voluptate dolore culpa eum dolor aperiam
        perspiciatis eius repellat? Quam. Distinctio, nostrum cumque tempore
        voluptatibus in excepturi alias aliquam beatae fugiat ut non dolor?
        Doloremque doloribus, accusantium maiores quis, dolore eaque mollitia
        quisquam dolorem laboriosam aspernatur officiis voluptas quod deserunt.
        Sint amet molestias, architecto deserunt molestiae atque dignissimos
        commodi, at corporis veritatis similique ratione officiis consequuntur
        omnis, exercitationem ipsum voluptatum sequi eius ullam eligendi quos
        expedita? Voluptas odio cupiditate aperiam? Nostrum minus veniam rem ad,
        illo similique distinctio at, nesciunt, iusto magnam beatae ratione.
        Consectetur nam consequatur autem minima, natus ullam molestias quo,
        ipsam cumque blanditiis enim voluptas voluptates totam. Quod laboriosam
        iste quia tempora fugit maxime suscipit quidem recusandae perspiciatis
        dicta enim facere eligendi odit perferendis veritatis consequatur,
        officia nisi vel sed, blanditiis, placeat culpa! Rerum accusantium eum
        voluptates? Minima cumque aliquam deserunt quasi sapiente suscipit rerum
        dolores, vero veritatis sed libero facere veniam, animi tempora nisi!
        Repellat et inventore ad ipsum vel explicabo iure provident minus ex
        quas! Accusamus corrupti libero at laboriosam, ipsa alias consequatur
        nostrum officia velit fugit repudiandae quia? Doloremque ea eos facilis
        ab molestias, cumque praesentium quibusdam iusto minus repellendus cum
        doloribus, blanditiis nesciunt? Autem corporis possimus natus maiores
        quibusdam quasi, officia nihil blanditiis perspiciatis expedita
        cupiditate unde dolorum? Cupiditate tempore sit ipsa sunt natus minima
        enim quis voluptas qui repellat. Et, id maxime! Possimus, explicabo, ex
        nulla voluptatibus impedit accusamus eveniet iusto optio omnis
        laudantium molestias similique. Aperiam excepturi velit cum voluptatibus
        tempora perspiciatis, magni dolore repellat vel in assumenda vero
        tenetur inventore. Tempora aliquid est minus dolorum labore qui ab ullam
        incidunt deleniti, obcaecati mollitia quibusdam odit cupiditate
        reiciendis magni repudiandae vitae molestias neque dicta possimus?
        Repellendus natus impedit fugit saepe laudantium! Iusto labore culpa
        numquam unde distinctio ducimus cupiditate, excepturi autem ab quaerat
        odit eaque cumque saepe dolorem, ex alias repellat dolor. Labore nostrum
        voluptas provident beatae iusto odio, voluptatem ratione. Molestiae
        perspiciatis asperiores quo dignissimos nihil optio maxime molestias
        obcaecati sequi cumque, alias corporis ullam, fuga perferendis sed
        architecto fugiat at repellat quaerat ipsam quis est consequatur qui
        quae. Et. Assumenda, repellendus alias obcaecati earum consequuntur
        omnis atque enim impedit architecto sint eaque iste aliquid dicta
        exercitationem, voluptate odit aut. Dolores eveniet repudiandae quos
        reprehenderit facilis accusamus voluptatibus recusandae impedit!
        Reprehenderit praesentium asperiores nesciunt dolore! Amet, facere modi.
        Enim saepe ipsa provident eligendi magnam rem, quod eaque, eum facere
        dolore dicta? Perspiciatis hic omnis impedit velit non quisquam,
        nesciunt rem. Aspernatur odit asperiores autem similique consequatur! Ab
        provident velit ex laboriosam cum ad, repudiandae nostrum, aliquam
        ratione, blanditiis voluptates obcaecati quam reprehenderit hic nihil?
        Similique autem facilis commodi officia magni! Animi distinctio neque
        cumque atque fugit aut amet perferendis ullam harum laborum debitis illo
        delectus voluptates tempora nihil corrupti saepe, quo fugiat totam,
        placeat laboriosam sed dicta? Modi, fugit quos. Ipsum obcaecati culpa
        quas nihil commodi cumque autem, ullam adipisci recusandae nulla, harum
        similique consequatur. Iure sed beatae quam perferendis laborum totam
        nulla, dolore aspernatur quia consectetur adipisci doloremque soluta.
        Commodi sint velit earum? Enim ipsum commodi officia, rem tempore id
        quod beatae molestiae numquam eius impedit itaque eum eos maiores
        perferendis illum harum error dolorem aperiam labore facilis
        consequatur. Aspernatur velit laudantium, atque quae odio nam commodi,
        fuga, sit laboriosam nulla nemo repellat esse temporibus neque! Commodi
        cumque cupiditate, dolore aperiam, animi a atque laborum eum sed
        inventore est! Quod praesentium mollitia iusto ducimus voluptates alias
        impedit cumque. Praesentium quo itaque eos, maxime ab sunt, voluptates
        in quae totam quisquam impedit delectus minus dolor illo ea minima
        aperiam repellendus. Aut blanditiis magni dolor nihil commodi facere?
        Non nihil nulla officiis! Blanditiis iusto quidem reiciendis aliquid
        consequuntur! Enim, dignissimos ad cupiditate cum repellat officia.
        Cupiditate beatae voluptates exercitationem excepturi corporis?
        Quibusdam laudantium fugiat consequuntur quos ipsum molestias amet sit
        magnam incidunt vel optio laborum sunt corrupti reprehenderit, autem sed
        mollitia non. Eaque expedita, nihil explicabo nulla suscipit ratione
        mollitia quas. Vel debitis ab adipisci! Doloribus aut id debitis officia
        iste delectus, veritatis unde harum earum rerum quasi officiis tempora
        expedita repellendus magni, hic dolorum minus soluta excepturi saepe
        totam maxime. Voluptate, eum? Reiciendis odit voluptatum exercitationem
        placeat tempora qui labore tenetur vel, nemo ad eligendi, at itaque
        autem. Ex officia recusandae corporis! Sapiente officiis placeat
        doloremque tenetur cum id quisquam! At beatae aliquid in eveniet,
        placeat fugit numquam sed quibusdam accusantium impedit omnis neque, ut
        dolores sunt veniam. Tempore vero maiores commodi vel aspernatur
        expedita laboriosam asperiores quod adipisci temporibus? Consectetur,
        sequi. Porro, voluptate. Esse consectetur ex perferendis facilis
        accusamus nihil nemo numquam quod aperiam unde dolorum doloribus,
        adipisci magni. Voluptate dolore culpa eum dolor aperiam perspiciatis
        eius repellat? Quam. Distinctio, nostrum cumque tempore voluptatibus in
        excepturi alias aliquam beatae fugiat ut non dolor? Doloremque
        doloribus, accusantium maiores quis, dolore eaque mollitia quisquam
        dolorem laboriosam aspernatur officiis voluptas quod deserunt. Sint amet
        molestias, architecto deserunt molestiae atque dignissimos commodi, at
        corporis veritatis similique ratione officiis consequuntur omnis,
        exercitationem ipsum voluptatum sequi eius ullam eligendi quos expedita?
        Voluptas odio cupiditate aperiam? Nostrum minus veniam rem ad, illo
        similique distinctio at, nesciunt, iusto magnam beatae ratione.
        Consectetur nam consequatur autem minima, natus ullam molestias quo,
        ipsam cumque blanditiis enim voluptas voluptates totam. Quod laboriosam
        iste quia tempora fugit maxime suscipit quidem recusandae perspiciatis
        dicta enim facere eligendi odit perferendis veritatis consequatur,
        officia nisi vel sed, blanditiis, placeat culpa! Rerum accusantium eum
        voluptates? Minima cumque aliquam deserunt quasi sapiente suscipit rerum
        dolores, vero veritatis sed libero facere veniam, animi tempora nisi!
        Repellat et inventore ad ipsum vel explicabo iure provident minus ex
        quas! Accusamus corrupti libero at laboriosam, ipsa alias consequatur
        nostrum officia velit fugit repudiandae quia? Doloremque ea eos facilis
        ab molestias, cumque praesentium quibusdam iusto minus repellendus cum
        doloribus, blanditiis nesciunt? Autem corporis possimus natus maiores
        quibusdam quasi, officia nihil blanditiis perspiciatis expedita
        cupiditate unde dolorum? Cupiditate tempore sit ipsa sunt natus minima
        enim quis voluptas qui repellat. Et, id maxime! Possimus, explicabo, ex
        nulla voluptatibus impedit accusamus eveniet iusto optio omnis
        laudantium molestias similique. Aperiam excepturi velit cum voluptatibus
        tempora perspiciatis, magni dolore repellat vel in assumenda vero
        tenetur inventore. Tempora aliquid est minus dolorum labore qui ab ullam
        incidunt deleniti, obcaecati mollitia quibusdam odit cupiditate
        reiciendis magni repudiandae vitae molestias neque dicta possimus?
        Repellendus natus impedit fugit saepe laudantium! Iusto labore culpa
        numquam unde distinctio ducimus cupiditate, excepturi autem ab quaerat
        odit eaque cumque saepe dolorem, ex alias repellat dolor. Labore nostrum
        voluptas provident beatae iusto odio, voluptatem ratione.
      </div>
    </div>
  );
}
