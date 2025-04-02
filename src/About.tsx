import Header from './Header.tsx';

function About() {
  return (
    <>
      <Header />
      <div className="pt-6 text-left md:ml-16 md:mr-16">
        <h3 className="font-bold text-24"> Who We Are </h3>

        <p className="mt-2"> We are a dedicated group of advocates and concerned citizens committed to tracking and documenting cases of missing legal residents, student and work visa holders, and citizens since the Trump administration took office. Our mission is to shed light on disappearances ensuring that every missing person is accounted for and their stories are told.</p>

        <h3 className="font-bold text-24 pt-6"> Our Mission </h3>
        <p className="mt-2"> The U.S. government has a responsibility to protect all residents, regardless of status. Since the start of 2025, numerous individuals—documented immigrants, asylum seekers, and U.S. citizens—have vanished under troubling circumstances, some after encounters with law enforcement, immigration agencies, or other government institutions.</p>
        <p className="mt-2"> We aim to:
          <ul className="list-disc ml-4">
            <li> Maintain a public, verifiable record of these disappearances. </li>
            <li> Shed light on potential systemic failures. </li>
            <li> Advocate for government transparency and accountability. </li>
          </ul>
        </p>

        <h3 className="font-bold text-24 pt-6"> Why It Matters </h3>
        <p className="mt-2"> A democracy is only as strong as its commitment to justice. By tracking these cases, we not only honor the missing but also expose flaws in the systems meant to protect them. Our work ensures that these individuals are not forgotten and that their disappearances are taken seriously by authorities. </p>

        <h3 className="font-bold text-24 pt-6"> How You Can Help </h3>
        <p className="mt-2"> If you have information about a missing person, want to contribute research, or support our cause, reach out. Every piece of information helps bring someone home. </p>
      </div>
    </>
  )
}

export default About
