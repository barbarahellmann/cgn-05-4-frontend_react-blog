import './App.css'

function App() {

    return (
        <>
            <Kopfteil/>

            <div>
                <Section1Title/>
                <Section1Text/>
                <Section1Img/>
                <Section1Text2/>
            </div>
            <div>
                <Section2Title/>
                <Section2Text/>
            </div>
        </>
    )
}


export default App


function Kopfteil() {
    return <>
        <h1> Bielefeld gibt es nicht </h1>
        <h2>Eine Million für den Beweis</h2>
        <h3> Die Stadt Bielefeld hat ein Problem: Es soll sie gar nicht geben. So zumindest besagt es die
        Bielefeld-Verschwörung. Wer nun einen Beweis dafür liefere, dem winken eine Million Euro. </h3>
        <p>
        „Bielefeld gibt es doch gar nicht.“ Dieser Witz hat seinen Ursprung vor 25 Jahren. Damals hatte
        sich der Informatikstudent Achim Held die Bielefeld-Verschwörungstheorie ausgedacht –
        eigentlich, um sich über Verschwörungstheorien lustig zu machen.
        Bielefeld will Schluss machen mit dieser „Verschwörungstheorie“. Zwei Wochen lang kann jeder
        versuchen zu beweisen, dass es die Stadt nicht gibt. Wer das schafft, soll ein Preisgeld von
        einer Million Euro bekommen.
        </p>
        </>
}


function Section1Title() {
    return <h3> Bielefelder sind genervt</h3>
}

function Section1Text() {
    return <p> Dazu gibt es auch nun eine offizielle Internetseite. Ins Netz gestellt wurde sie von der
        Bielefeld-Marketing GmbH. Deren Geschäftsführer Martin Knabenreich erklärt im Deutschlandfunk
        Kultur, dass viele Bielefelder von dem „Witz“ fürchterlich genervt seien. Denn selbst in den USA
        würden sie darauf angesprochen. Dies sei schon etwas einmaliges, räumt Knabenreich ein und sieht
        trotzdem die positive Seite: „Das ist eine schöne Einladung, über die Stadt zu erzählen.“</p>
}

function Section1Img() {
return <img
    src="https://bilder.deutschlandfunk.de/FI/LE/_a/49/FILE_a49e3968f5ec04092cc46264070697ce/37394023-jpg-100-1280xauto.jpg"
    alt="Achim Held, Erfinder der Bielefeld-Verschwörung"/>
}

function Section1Text2() {
    return <p>Doch nun wolle die Stadt den Spieß umdrehen – und selbst Spaß mit der Verschwörung haben, erläutert
        Knabenreich. Seit Mittwoch ist die Internetseite online und bereits mehrere hundert „Versuche“ –
        unter anderem mathematische, philosophische, physische und auch juristische Beweisführungen –
        eingetroffen.
        „Ich persönlich bin mit zu hundert Prozent sicher, dass das keinen Bestand haben wird. Denn wir
        haben auch gesagt, dass das wissenschaftlich bewiesen wird – und auch unwiderruflich.“</p>
}

function Section2Title() {
    return <h3> Firmen spenden Preisgeld</h3>
}

function Section2Text() {
    return <p>„Das ist der ganze Spaß an der Sache, dass wir gesagt haben, wenn an der Verschwörung doch nur Hauch
        dran sein sollte, gerade aktuell haben Verschwörungstheorien auch Konjunktur, dann ist es uns das
        auch wert.“
        Das Geld für die Prämie sei aber nicht aus der Stadtkasse gekommen, versichert Knabenreich, sondern
        würde von Unternehmen zur Verfügung gestellt werden – wenn dies wider Erwarten notwendig sein
        sollte.
        Knabenreich frohlockt zudem, dass zukünftig Bielefelder Zweiflern erwidern könnten, „wenn du so klug
        bist und meinst, die Stadt gibt es nicht, dann hättest du dir die Millionen abholen können“.</p>
}