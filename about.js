function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section with ID "${sectionId}" not found.`);
    }
}

function changeLanguage() {
    alert("تغییر زبان به زودی فعال خواهد شد!");
}
