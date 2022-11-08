export function registerBtnModal() {
  return `<form class="form">
    <h2 class="title-modal">Authorization</h2>
    <div class="form-field">
        <label class="form-label" for="mail">Email</label>
        <input type="email" class="form-input" name="mail" id="mail" required autocomplete="email" placeholder="
Something like name@site.com">

    </div>
    <div class="form-field">

        <label class="form-label" for="password">Password</label>
        <input class="form-input" type="password" name="password" id="password" required autocomplete="on"
            placeholder="Some kind of complex cipher in your memory...">
    </div>
     <button type="button" class="button-reg-modal">Log in</button>
    
</form>`;
}
