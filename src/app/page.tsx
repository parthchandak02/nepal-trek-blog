import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Building Schools, Building Hope
        </h1>
        <p className="text-xl text-muted-foreground">
          A Nepal Trek Story
        </p>
        <p className="text-lg text-muted-foreground italic">
          January 4 - January 10, 2025
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-12">
        <div className="relative w-full h-auto">
          <Image
            src="/content/assets/images/parth-intro-1.jpg"
            alt="Author with BuildOn team in Nepal"
            width={1200}
            height={675}
            className="rounded-lg w-[50%] mx-auto"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          Embarking on a journey to build hope, one brick at a time
        </p>
      </section>

      {/* Blog Content */}
      <article className="prose prose-xl max-w-none
        prose-headings:font-bold
        prose-h1:text-5xl prose-h1:mb-8 prose-h1:leading-tight
        prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-gray-800 dark:prose-h2:text-white
        prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-gray-700 dark:prose-h3:text-gray-100
        prose-p:text-gray-600 prose-p:leading-relaxed dark:prose-p:text-gray-300
        prose-img:rounded-lg
      ">
        <h2>Day 1: Arrival in Kathmandu</h2>
        <p>
          When our plane landed in Kathmandu, I felt at home in the familiar busy city life that reminded me of Mumbai.
          Our Trek Leader Santosh Mahato met us at the airport and took us to our hotel. He made sure we had everything
          we needed, including hot water. We knew we were in good hands.
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/plane-landing-nepal.png"
            alt="Landing in Kathmandu"
            width={1200}
            height={675}
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          First glimpse of Nepal as our plane descended into Kathmandu
        </p>

        <h2>Day 2: First Steps in Nepal</h2>
        <p>
          The day filled our hearts with hope as we visited a finished BuildOn school near Dhangadi. The children gave us
          such a warm welcome - they put flower garlands around our necks and shared their songs and dances with us.
          Their joy was catching, and soon we were all smiling.
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/welcome-garlands-1.gif"
              alt="Children welcoming us with garlands"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/welcome-garlands-2.gif"
              alt="More welcome ceremonies"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          School children sharing their culture through dance and song
        </p>

        <p>
          One of the most impactful moments came during our introduction to BuildOn's adult literacy program.
          Through our skilled translators, Madan and Runam, we heard powerful testimonials from villagers whose
          lives had been transformed. They spoke of "new life" – of learning basic economics and mathematics,
          of starting their own handicraft and farming businesses.
        </p>

        <p>
          The joy and gratitude of the school children touched our hearts deeply. They had prepared special
          performances to thank us - their small faces beaming with excitement as they danced and sang traditional
          songs. Their enthusiasm was contagious, and we found ourselves clapping along, caught up in their happiness.
          It was a beautiful demonstration of how a school can become the heart of a community, nurturing not just
          education but also cultural pride and creativity.
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/children-performance.gif"
            alt="Children performing traditional dances"
            width={1200}
            height={675}
            unoptimized
            className="rounded-lg w-[50%] mx-auto"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          School children sharing their culture through dance and song
        </p>

        <p>
          Later that night, we were introduced to the dedicated BuildOn management team, including Trek Coordinator
          Ardahana (Anu) Chaudhary and Deputy Trek Director Jharana Bam. Learning that this would be BuildOn's 419th
          school in Nepal, and that some team members had participated in over 100 treks, gave us a sense of the
          program's incredible scale and impact.
        </p>

        <h2>Day 3: Journey to Basanta</h2>
        <p>
          The morning began early as we boarded our team bus to Basanta. What awaited us was a welcome ceremony
          that would stay with me forever. The entire village had lined up to greet us, creating a human pathway
          to the school playground, which had been beautifully decorated for our arrival.
        </p>

        <p>
          The day was filled with significant moments – traditional dances, the signing of the covenant (a powerful
          symbol of community partnership), and the commencement pooja. But perhaps the most meaningful moment was
          meeting my host father, Mr. Tulasiram Tharu.
        </p>

        <div className="space-y-8 my-8">
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/welcome-dance.gif"
              alt="Traditional dance performance"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/welcome-dance-2.jpg"
              alt="Village celebration"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          The community coming together to welcome us with traditional dances
        </p>

        <div className="relative aspect-video my-8">
          <Image
            src="/content/assets/images/covenant-signing.jpg"
            alt="Covenant signing ceremony"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Signing the covenant - a symbol of our shared commitment to education and community development
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/pooja-ceremony.gif"
              alt="Commencement pooja ceremony"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/team-dig-begin.gif"
              alt="Team starting the foundation"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Beginning our journey with traditional blessings and groundbreaking
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/host-father-1.jpg"
            alt="Meeting my host father"
            width={1200}
            height={675}
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          First moments with my host father, Mr. Tulasiram Tharu
        </p>

        <p>
          Mr. Tharu's hospitality began immediately as he loaded our bags onto his bicycle. At his home, I met his warm family - his daughter-in-law who managed the household with grace, and his cheerful grandson Prince who quickly became my little friend. During our walk to his farms, Mr. Tharu shared that his son was working in Malaysia and wouldn't return for three years. Despite the distance, the family's strong bonds were evident in how they supported each other.
        </p>

        <p>
          Communication flowed surprisingly well – my Hindi helped bridge the gap with Nepali, allowing me to translate for my teammate Dean. I learned about the Nepali calendar (Bikram Samvat), discovering that our 2025 was their 2081.
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/farm-visit.gif"
            alt="Farm visit with host family"
            width={1200}
            height={675}
            unoptimized
            className="rounded-lg w-[50%] mx-auto"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Walking through the sugarcane and potato fields with our host father
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/neighbors-1.jpg"
              alt="Meeting the neighbors"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/neighbors-2.jpg"
              alt="Connecting with villagers"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Connecting with the village community
        </p>

        <p>
          During our walk through the village, we talked with neighbors about their Hindu traditions and their wish to be closer to nearby countries like India. The children couldn't take their eyes off Dean - for most of them, he was the first American they had ever met.
        </p>

        <p>
          As the sun set, we gathered for our first dinner with the family. The aroma of freshly cooked daal bhat filled the house as we sat cross-legged on the floor. Mr. Tharu's daughter-in-law had prepared a feast - steaming rice, yellow lentil soup, and local vegetable curry. We were surprised to learn that the family only ate two meals a day, which explained the generous portions they served us. The food was incredibly delicious, but we had to politely ask them to reduce our portions - their usual servings were almost twice what we could eat! Prince showed me how to mix everything together with my hands, the traditional way of eating. The simple meal tasted extraordinary, made special by the family's hospitality and the stories we shared despite our language differences.
        </p>

        <div className="relative aspect-video my-8">
          <Image
            src="/content/assets/images/daal-bhat.jpg"
            alt="Traditional dinner"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Our first dinner of daal bhat with the host family
        </p>

        <p>
          The evening ended with an impromptu astronomy lesson, as I showed local children how to use a star map app on my phone. Among them was Sagar, a remarkably bright 10th grader whose English skills and intellectual curiosity would continue to impress me throughout our stay.
        </p>

        <div className="relative aspect-video my-8">
          <Image
            src="/content/assets/images/star-gazing.jpg"
            alt="Star gazing with children"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Sharing the wonders of the night sky with village children
        </p>

        <div className="relative aspect-video my-8">
          <Image
            src="/content/assets/images/mosquito-nets.jpg"
            alt="Our sleeping arrangement"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Setting up our beds with mosquito nets in our host home
        </p>

        <h2>Day 4: Breaking Ground and Breaking Barriers</h2>
        <p>
          We woke up at 6 AM sharp for yoga with the BuildOn teacher. Even though it was cold and dark, the exercises warmed us up and got us ready for the day. After breakfast at the main office, we went to the construction site, excited to start the work we came here to do.
        </p>

        <div className="relative aspect-video my-8">
          <Image
            src="/content/assets/images/yoga-1.jpg"
            alt="Morning yoga practice"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Starting our day with yoga under the guidance of BuildOn's guruji
        </p>

        <p>
          We started our first construction day with BuildOn's energetic morning cheer, our voices echoing through the village as we prepared to break ground on the 419th school in Nepal.
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/buildon-cheer-day-1.gif"
            alt="BuildOn morning cheer"
            width={1200}
            height={675}
            unoptimized
            className="rounded-lg w-[50%] mx-auto"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Starting our first day with the BuildOn cheer
        </p>

        <p>
          We split into 3 teams. Team One took on the challenging task of digging the foundation trenches. Armed with shovels and pickaxes, we worked in pairs, taking turns to break the hard ground and clear the earth. The physical demands of the work brought us closer together, as we encouraged each other through each scoop of soil.
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/digging-1.gif"
              alt="Team digging trenches"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/digging-2.gif"
              alt="Working with pickaxes"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Team One working together to dig the foundation trenches
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/digging-parth-1.jpg"
            alt="Personal contribution to the foundation work"
            width={1200}
            height={675}
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          Taking my turn with the pickaxe to break ground for the foundation
        </p>

        <div className="space-y-8 my-8">
          <div className="relative w-full h-auto">
            <Image
              src="/content/assets/images/digging-3.jpg"
              alt="Foundation work"
              width={1200}
              height={675}
              className="rounded-lg w-full"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/digging-4.jpg"
              alt="Trench digging"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Our team making steady progress on the foundation trenches
        </p>

        <p>
          Team Two had the crucial job of sifting sand to ensure the right consistency for our concrete mix. Using large mesh screens, we carefully filtered out rocks and debris. The villagers taught us their technique of gentle shaking, showing us how to tell when the sand was just right by its texture.
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/sand-sifting.jpg"
            alt="Sand sifting process"
            width={1200}
            height={675}
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Team Two learning the precise art of sand sifting from the villagers
        </p>

        <p>
          Team Three focused on creating the rebar framework that would strengthen our foundation. We learned to bend and tie the steel bars into precise shapes, following the master builder's guidance. It was detailed work that required patience and precision, but knowing these metal bones would support the school for generations made every careful twist worthwhile.
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/rebar-1.gif"
              alt="Creating the rebar structure"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/rebar-2.gif"
              alt="Assembling the steel framework"
              width={1200}
              height={675}
              unoptimized
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Team Three crafting the steel framework for the foundation
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/rebar-3.jpg"
              alt="Detailed rebar work"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/rebar-4.jpg"
              alt="Final rebar assembly"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Precision and teamwork in creating the foundation's steel framework
        </p>

        <p>
          Some teams formed human chains that snaked across the construction site, passing rocks and pans of sand from one person to another. This method not only made the work faster but brought everyone together - BuildOn team members, villagers, and even curious children who wanted to help. The chains became a living symbol of community spirit, with songs and laughter making the heavy loads feel lighter.
        </p>

        <div className="space-y-8 my-8">
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/human-chain.gif"
              alt="Human chain passing materials"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/human-chain-2.jpg"
              alt="Community working together"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/human-chain-3.jpg"
              alt="Team spirit in action"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Village community and BuildOn team working together in a human chain to transport materials
        </p>

        <p>
          After an energizing lunch, we participated in a powerful exercise about courage, each of us reflecting on what the word meant to us. But perhaps the most impactful part of the day came during our gender discussion groups.
        </p>

        <p>
          The men's group taught me a lot. Most were farmers who wanted to build this school to give their children better chances in life. Growing up in India, I used to hear people joke about village life being "backward," but being here reminded me that my own grandfather came from a village just like this one.
        </p>

        <div className="relative aspect-video my-8">
          <Image
            src="/content/assets/images/farmers-discussion.jpg"
            alt="Farmers discussion group"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Deep conversations with the village farmers about their hopes and challenges
        </p>

        <p>
          The farmers spoke candidly about their challenges: uncertainty about crop yields, concerns about profit margins, and feelings of being trapped. Together, we explored potential solutions like automation and collective farming, drawing parallels with corporate farming practices in the USA.
        </p>

        <p>
          The day ended with an impromptu football match with the village children – a beautiful reminder that play knows no language barriers. As we kicked the ball around under the setting sun, all differences melted away. It wasn't about Americans or Nepalis, BuildOn team or villagers – it was simply people connecting through sport.
        </p>

        <div className="grid grid-cols-3 gap-4 my-8">
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/football-1.gif"
              alt="Playing with children"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/football-2.gif"
              alt="Football with villagers"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/football-3.gif"
              alt="Evening game"
              fill
              unoptimized
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Breaking down barriers through the universal language of football
        </p>

        <h3>Evening Reflections</h3>
        <p>
          Over a traditional meal of dal bhaat and potato sabji, Mr. Tharu shared stories of his twenty-year football career.
          The simple act of sitting together for dinner, a daily ritual in their household, spoke volumes about their family
          values and community bonds.
        </p>

        <p>
          Later that evening, I had another enlightening conversation with Sagar, the bright student I'd met earlier. He shared
          how acquiring a mobile phone had transformed his education, helping him top his class for three years running. His
          enthusiasm for technology was infectious as he demonstrated his prowess with ChatGPT and DALL-E, creating impressive
          content that left me amazed. Here, in a small village in Nepal, was a perfect example of how technology could bridge
          educational gaps and open new horizons.
        </p>

        <h2>Day 5: Building Foundations and Celebrating Love</h2>
        <p>
          The BuildOn cheer felt stronger on our second day, with more villagers joining in as they learned the words and movements.
        </p>

        <div className="relative aspect-video my-8">
          <Image
            src="/content/assets/images/buildon-cheer-day-2.gif"
            alt="BuildOn team spirit"
            fill
            unoptimized
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Village children joining our morning cheer
        </p>

        <p>
          More villagers joined our morning yoga on our second day of building. As we worked harder on the school site,
          the villagers taught me how to mix cement their way. I could see how their farming skills made them experts
          with tools - they knew exactly how to use them.
        </p>

        <div className="space-y-8 my-8">
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/cement-mixing-1.jpg"
              alt="Cement mixing technique"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/cement-mixing-2.jpg"
              alt="Cement mixing technique"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Learning the traditional two-person cement mixing technique with ropes and shovels
        </p>

        <p>
          But this day held a special surprise – a traditional Nepali wedding ceremony for our teammates Morgan and Dave.
          What began as a small celebration transformed into a village-wide festival. As someone familiar with Indian weddings,
          I was fascinated by both the similarities and unique aspects of Nepali traditions.
        </p>

        <div className="space-y-8 my-8">
          <div className="relative w-full h-auto">
            <Image
              src="/content/assets/images/groom-1.jpg"
              alt="Traditional wedding procession"
              width={1200}
              height={675}
              className="rounded-lg w-[50%] mx-auto"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground italic">
            Celebrating Morgan and Dave's wedding with traditional Nepali customs
          </p>

          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/groom-2.jpg"
              alt="Wedding ceremony"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground italic">
            Our team embracing the beautiful Nepali wedding traditions
          </p>

          <div className="relative w-full h-auto">
            <Image
              src="/content/assets/images/groom-3.gif"
              alt="Wedding celebrations"
              width={1200}
              height={675}
              unoptimized
              className="rounded-lg w-[50%] mx-auto"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground italic">
            The Baraat proceeding from the groom's host family home to the BuilOn HQ where the Bride and Groom would get married
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/bride-and-groom.jpg"
              alt="Traditional wedding rituals"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/bride-and-groom-1.jpg"
              alt="Wedding celebrations"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/bride-and-groom-2.jpg"
              alt="Cultural ceremony"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/bride-and-groom-3.jpg"
              alt="Wedding festivities"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Celebrating the union with traditional Nepali wedding customs
        </p>

        <h2>Day 6: Final Touches and Fond Farewells</h2>
        <p>
          Our last morning of construction began with what had become a cherished ritual – yoga at dawn. The number of
          villagers joining us had grown each day, a beautiful testament to the bonds we'd formed. The crisp morning air
          was filled with a mix of excitement and nostalgia, knowing this would be our final day of building.
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/yoga-2.jpg"
            alt="Sunrise yoga session"
            width={1200}
            height={675}
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          Our largest yoga session yet, with villagers joining in growing numbers
        </p>

        <p>
          Our final BuildOn cheer was the loudest yet, as the entire community gathered to celebrate our last day of construction.
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/buildon-cheer-day-3.jpg"
            alt="Final day BuildOn cheer"
            width={1200}
            height={675}
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          The whole community joining in for our final cheer
        </p>

        <p>
          What made this final day even more special was an unexpected surge of young energy. Sagar and his classmates,
          having spread word about our project to neighboring schools, arrived with their entire 8th, 9th, and 10th grade
          classes to help with construction. Their presence not only accelerated our work but also symbolized the project's
          ripple effect throughout the community – these students weren't just building a school, they were building their own future.
        </p>

        <div className="relative aspect-video my-8">
          <Image
            src="/content/assets/images/neighboring-school-kids.jpg"
            alt="Students from neighboring schools joining the construction"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Students from nearby schools coming together to help build their community's future
        </p>

        <p>
          The work site buzzed with renewed energy. Looking at our progress from day one to now was nothing short of remarkable.
          The trenches we'd dug, the foundations we'd laid – each element a physical manifestation of our collective hope for the future.
        </p>

        <div className="relative aspect-video my-8">
          <Image
            src="/content/assets/images/construction-progress.jpg"
            alt="Construction progress"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          The remarkable progress of our foundation work
        </p>

        <p>
          After lunch, we gathered for a creative exercise that brought out everyone's playful side – drawing as many
          circular objects as we could imagine in three minutes. It was a simple activity that sparked joy and laughter,
          reminding us that creativity knows no cultural bounds.
        </p>

        <h3>The Closing Ceremony</h3>
        <p>
          The afternoon transformed into an unforgettable celebration. Our host families presented us with traditional
          attire, dressing us in local garments that made us feel truly part of their community. The village gathered
          one final time, the air filled with music and dance.
        </p>

        <p>
          The celebration began with a beautiful showcase of local culture, as village women performed traditional
          Nepali dances. Their graceful movements and colorful attire created a mesmerizing display of the region's
          rich cultural heritage.
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/nepali-closing-dance.gif"
            alt="Traditional Nepali dance"
            width={1200}
            height={675}
            unoptimized
            className="rounded-lg w-[50%] mx-auto"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          Village women performing traditional Nepali dances at the closing ceremony
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/team-cultural-1.jpg"
              alt="Team in traditional attire"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
        <Image
              src="/content/assets/images/team-cultural-2.jpg"
              alt="Cultural celebration"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/team-cultural-3.jpg"
              alt="Traditional dress ceremony"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/content/assets/images/team-cultural-4.jpg"
              alt="Community gathering"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Our team dressed in traditional Nepali attire for the closing ceremony
        </p>

        <p>
          The formal ceremony gave way to spontaneous dancing, with Bollywood tunes bringing everyone to their feet.
          It was a beautiful fusion of cultures – Nepali traditions meeting Indian music, American enthusiasm blending
          with local grace.
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/team-cultural-dance.gif"
            alt="Cultural dance performance"
            width={1200}
            height={675}
            unoptimized
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          Spontaneous dancing brought everyone together one last time
        </p>

        <p>
          The girls from our team had also prepared a special surprise – they learned a popular Nepali song and
          choreographed a dance performance, which they presented as a heartfelt tribute to Morgan and Dave during
          the celebrations.
        </p>

        <h3>Evening of Gratitude</h3>
        <p>
          That evening was filled with emotional exchanges of gifts. We presented our host families with items we'd
          brought from home, while they surprised us with exquisite local handicrafts. Morgan's Polaroid camera proved
          invaluable, capturing precious moments that we could share – one photo for them, one for us.
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/polaroid-moment.jpg"
            alt="Family portrait"
            width={1200}
            height={675}
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          Capturing memories with our host family through Morgan's Polaroid
        </p>

        <p>
          My final conversation with Sagar was particularly moving. His bright spirit and technological aptitude had
          shown me that potential knows no geographical bounds. In him, I saw the future that BuildOn was helping to create.
        </p>

        <p>
          Our team's last gathering stretched from 8 PM until midnight, as we shared our evolving perceptions of each
          other and the profound ways this experience had changed us. What had begun as a group of strangers had
          transformed into something far more meaningful – a family united by purpose and experience.
        </p>

        <h2>Day 7: Farewell to Basanta</h2>
        <p>
          The 3:45 AM alarm came too soon. As we prepared to leave for Dhangadi and then Kathmandu, emotions ran high.
          The school site we were leaving behind was more than just a construction project – it was a promise to the
          future, a bridge between cultures, and a testament to what people can achieve together.
        </p>

        <p>
          The two-hour journey to Dhangadi was followed by some flight delays, but even these couldn't dampen our spirits.
          Our propeller plane to Kathmandu offered a parting gift – breathtaking views of Mount Everest and the Himalayan
          range, a majestic farewell to our Nepali adventure.
        </p>

        <div className="relative w-full h-auto my-8">
          <Image
            src="/content/assets/images/himalayas-plane.gif"
            alt="Himalayan view"
            width={1200}
            height={675}
            unoptimized
            className="rounded-lg w-full"
          />
        </div>
        <p className="text-center text-sm text-muted-foreground italic mt-2 mb-12">
          A farewell glimpse of the majestic Himalayas
        </p>

        <h2>Reflections</h2>
        <p>
          This trip was more than just building a school - it showed me how people can work together and grow. If you're
          thinking about doing something like this to help make the world better, I say go for it. Being part of real
          change will change you too, in ways you didn't expect.
        </p>

        <div className="space-y-8 my-8">
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/before-construction.jpg"
              alt="School site before construction"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/after-construction.jpg"
              alt="School site after construction"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground italic">
          The transformation of the school site - from empty ground to the foundation of future dreams
        </p>

        <p>
          The school we helped build in Basanta is more than just bricks and cement. It shows what can happen when
          people from different places work together. It's a promise of better things to come. I'll never forget what
          I saw and learned here.
        </p>

        <div className="space-y-8 my-8">
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/team-final-1.jpg"
              alt="Team final gathering"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/team-final-2.jpg"
              alt="Final day celebration"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-video">
            <Image
              src="/content/assets/images/team-final-3.jpg"
              alt="BuildOn team photo"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </article>
    </div>
  );
}
