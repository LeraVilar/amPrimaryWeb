const linkTransform = {
  methods: {
    linkTransform: (string) => {
      const converter = {
        'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i','й':'y',
        'к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f',
        'х':'h','ц':'c','ч':'ch','ш':'sh','щ':'sch','ь':'','ы':'y','ъ':'','э':'e','ю':'yu','я':'ya',
        ' ':'-'
      }

      let tempString = string.toLowerCase()
      let convertedString = ''

      for (let i = 0; i < tempString.length; i++) {
        const char = tempString[i]

        if (converter[char] !== undefined) {
          convertedString += converter[char]
        } 
        else if (/^[a-z0-9-]$/.test(char)) {
          convertedString += char
        }
      }

      return convertedString
        .replace(/-+/g, '-')     
        .replace(/^-|-$/g, '')
    }
  }
}

export default linkTransform