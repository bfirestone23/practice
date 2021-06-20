const reverse = (str) => {
    if (!str.length) return '';

    return reverse(str.slice(1)) + str[0];
}
  
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

console.log(reverse('awesome'))
