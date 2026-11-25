# PROTOTYPE: inlines src/*.md and LICENSE into handout-layout.html. Run: python3 build.py
import json, pathlib
d = pathlib.Path(__file__).parent
skills = {n: (d/"src"/f"{n}.md").read_text() for n in ["grill-me","prototype","wait-what"]}
lic = "Adapted from mattpocock/skills (https://github.com/mattpocock/skills),\ncommit 5863806. Changed for our team.\n\n" + (d/"src"/"LICENSE.txt").read_text()
html = (d/"template.html").read_text().replace("__SKILLS__", json.dumps(skills)).replace("__LICENCE__", json.dumps(lic))
(d/"handout-layout.html").write_text(html.replace("</script>", "</script>", 1))
