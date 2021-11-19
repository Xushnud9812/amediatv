<template>
    <div>
        <div @click="closeModal" v-if="isRegister" class="fixvh"></div>
        <div v-if="isRegister" class="modal-card" style="width: 400px">
            <div class="modal-title">
                <h2>Ro'yxatdan o'tish</h2>
                <button @click="closeModal">
                    <fa class="times" icon="times" />
                </button>
            </div>

            <div class="modal-body">
                <div
                    class="input-form"
                    :class="{ 'form-error': $v.register.name.$error }"
                >
                    <input
                        v-model="$v.register.name.$model"
                        type="text"
                        placeholder="F.I.O"
                    />
                    <h6 v-if="!$v.register.name.required" class="error-text">
                        To'ldirish shart
                    </h6>
                </div>

                <div
                    class="input-form"
                    :class="{ 'form-error': $v.register.email.$error }"
                >
                    <input
                        v-model="$v.register.email.$model"
                        type="text"
                        placeholder="Email"
                    />
                    <h6 v-if="!$v.register.email.required" class="error-text">
                        To'ldirish shart
                    </h6>
                    <h6 v-if="!$v.register.email.email" class="error-text">
                        To'g'ri to'ldiring
                    </h6>
                </div>
                <div
                    class="input-form"
                    :class="{ 'form-error': $v.register.phone.$error }"
                >
                    <input
                        type="text"
                        v-model.trim="$v.register.phone.$model"
                        autocomplete="off"
                        placeholder="+998 -- --- -- --"
                        v-mask="'+998 ## ### ## ##'"
                    />
                    <h6 v-if="!$v.register.phone.required" class="error-text">
                        To'ldirish shart
                    </h6>
                    <h6 v-if="!$v.register.phone.minLength" class="error-text">
                        To'g'ri to'ldiring
                    </h6>
                </div>
                <div
                    class="input-form"
                    :class="{ 'form-error': $v.register.password.$error }"
                >
                    <div class="input-rel">
                        <input
                            name="password"
                            autocomplete="off"
                            :type="type"
                            @focus="handleType"
                            @blur="handleType"
                            v-model="$v.register.password.$model"
                            placeholder="Parolni kiriting"
                        />
                        <button
                            @click="changePasswordVisible"
                            v-if="type == 'password'"
                            class="btn-icon"
                        >
                            <fa class="icon" icon="eye" />
                        </button>
                        <button
                            @click="changePasswordVisible"
                            v-else
                            class="btn-icon"
                        >
                            <fa class="icon" icon="eye-slash" />
                        </button>
                    </div>

                    <h6
                        v-if="!$v.register.password.required"
                        class="error-text"
                    >
                        To'ldirish shart
                    </h6>
                    <h6
                        v-if="!$v.register.password.minLength"
                        class="error-text"
                    >
                        To'g'ri to'ldiring
                    </h6>
                </div>
                <div
                    class="input-form"
                    :class="{
                        'form-error':
                            $v.register.confirmPassword.$error &&
                            !$v.register.password.$error,
                    }"
                >
                    <div class="input-rel">
                        <input
                            v-model="$v.register.confirmPassword.$model"
                            :type="type"
                            @focus="handleType"
                            @blur="handleType"
                            placeholder="Parolni takrorlang"
                        />
                        <button
                            @click="changePasswordVisible"
                            v-if="type == 'password'"
                            class="btn-icon"
                        >
                            <fa class="icon" icon="eye" />
                        </button>
                        <button
                            @click="changePasswordVisible"
                            v-else
                            class="btn-icon"
                        >
                            <fa class="icon" icon="eye-slash" />
                        </button>
                    </div>

                    <h6
                        v-if="
                            !$v.register.confirmPassword.sameAsPassword &&
                            !$v.register.password.$error
                        "
                        class="error-text"
                    >
                        Parolni tasdiqlang
                    </h6>
                </div>
                <div>
                    <button
                        @click="registerUser"
                        class="btn-sm mb-15 w-100 btn-sm-active"
                    >
                        Ro'yxatdan o'tish
                    </button>
                </div>
                <div>
                    <button class="btn-sm w-100" @click="openLogin">
                        Kirish
                    </button>
                </div>
            </div>
        </div>

        <div @click="closeModal" v-if="isLogin" class="fixvh"></div>
        <div v-if="isLogin" class="modal-card" style="width: 400px">
            <div class="modal-title">
                <h2>Kirish</h2>
                <button @click="closeModal">
                    <fa class="times" icon="times" />
                </button>
            </div>

            <div class="modal-body">
                <div
                    class="input-form"
                    :class="{ 'form-error': $v.login.phone.$error }"
                >
                    <input
                        type="text"
                        v-model.trim="$v.login.phone.$model"
                        autocomplete="off"
                        placeholder="+998 -- --- -- --"
                        v-mask="'+998 ## ### ## ##'"
                    />
                    <h6 v-if="!$v.login.phone.required" class="error-text">
                        To'ldirish shart
                    </h6>
                    <h6 v-if="!$v.login.phone.minLength" class="error-text">
                        To'g'ri to'ldiring
                    </h6>
                </div>
                <div
                    class="input-form"
                    :class="{ 'form-error': $v.login.password.$error }"
                >
                    <div class="input-rel">
                        <input
                            name="password"
                            autocomplete="off"
                            :type="type"
                            @focus="handleType"
                            @blur="handleType"
                            v-model="$v.login.password.$model"
                            placeholder="Parolni kiriting"
                        />
                        <button
                            @click="changePasswordVisible"
                            v-if="type == 'password'"
                            class="btn-icon"
                        >
                            <fa class="icon" icon="eye" />
                        </button>
                        <button
                            @click="changePasswordVisible"
                            v-else
                            class="btn-icon"
                        >
                            <fa class="icon" icon="eye-slash" />
                        </button>
                    </div>

                    <h6 v-if="!$v.login.password.required" class="error-text">
                        To'ldirish shart
                    </h6>
                    <h6 v-if="!$v.login.password.minLength" class="error-text">
                        To'g'ri to'ldiring
                    </h6>
                </div>
                <div>
                    <button
                        @click="loginUser"
                        class="btn-sm mb-15 w-100 btn-sm-active"
                    >
                        Kirish
                    </button>
                </div>
                <div>
                    <button class="btn-sm w-100" @click="openRegister">
                        Ro'yxatdan o'tish
                    </button>
                </div>
            </div>
        </div>

        <header>
            <div class="site-container">
                <div class="header-inner">
                    <div class="header-left">
                        <nuxt-link :to="{ name: `index___${$i18n.locale}` }">
                            <span class="logo">
                                <nuxt-img src="/logo.png" />
                            </span>
                        </nuxt-link>
                    </div>
                    <div class="header-right">
                        <div class="header-nav">
                            <ul>
                                <li>
                                    <nuxt-link to="/"
                                        >Kurslar
                                        <span class="plus"
                                            ><fa icon="plus"
                                        /></span>
                                        <span class="minus"
                                            ><fa icon="minus"
                                        /></span>
                                    </nuxt-link>

                                    <ul class="dropdown">
                                        <li>
                                            <nuxt-link
                                                :to="{
                                                    name: `filter___${$i18n.locale}`,
                                                    query: { category: 1 },
                                                }"
                                            >
                                                <span class="icon-right">
                                                    <fa icon="angle-right" />
                                                </span>
                                                Dasturlash</nuxt-link
                                            >
                                        </li>
                                        <li>
                                            <nuxt-link
                                                :to="{
                                                    name: `filter___${$i18n.locale}`,
                                                    query: { category: 2 },
                                                }"
                                            >
                                                <span class="icon-right">
                                                    <fa icon="angle-right" />
                                                </span>
                                                Til kurslar</nuxt-link
                                            >
                                        </li>
                                        <li>
                                            <nuxt-link
                                                :to="{
                                                    name: `filter___${$i18n.locale}`,
                                                    query: { category: 3 },
                                                }"
                                            >
                                                <span class="icon-right">
                                                    <fa icon="angle-right" />
                                                </span>
                                                Biznes</nuxt-link
                                            >
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <nuxt-link to="/">O'qituvchilar</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/">Yangiliklar</nuxt-link>
                                </li>
                                <li><nuxt-link to="/">About</nuxt-link></li>
                            </ul>
                        </div>

                        <div class="header-login">
                            <button
                                v-if="!$auth.loggedIn"
                                class="login"
                                @click="openLogin"
                            >
                                Kirish
                            </button>

                            <div
                                v-else
                                class="profile"
                                v-click-other="clickOut"
                            >
                                <button
                                    @click="isProfile = true"
                                    class="profile"
                                >
                                    <div class="pro-img">
                                        <img
                                            src="https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <fa icon="sort-down" />
                                </button>

                                <div v-if="isProfile" class="pro-dropdown">
                                    <h6>{{ $auth.user.name }}</h6>
                                    <ul>
                                        <li>
                                            <nuxt-link
                                                :to="{
                                                    name: `profile___${$i18n.locale}`,
                                                }"
                                            >
                                                <span>
                                                    <fa icon="user" />
                                                </span>
                                                Profil</nuxt-link
                                            >
                                        </li>
                                        <li>
                                            <nuxt-link to="/">
                                                <span>
                                                    <fa icon="play-circle" />
                                                </span>
                                                Kurslar</nuxt-link
                                            >
                                        </li>
                                    </ul>
                                    <button
                                        @click="
                                            $auth.logout();
                                            isProfile = false;
                                        "
                                        class="logout"
                                    >
                                        <fa icon="power-off" /> Chiqish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import { required, minLength, sameAs, helpers } from "vuelidate/lib/validators";
const email = helpers.regex(
    "alpha",
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export default {
    data() {
        return {
            isProfile: false,
            type: "text",
            visiblePassword: false,
            register: {
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
            },
            login: {
                phone: "",
                password: "",
            },
        };
    },
    validations: {
        register: {
            name: {
                required,
            },
            // check: {
            //     checked: value => value === true
            // },
            email: {
                required,
                email,
            },
            phone: {
                required,
                minLength: minLength(17),
            },
            password: {
                required,
                minLength: minLength(6),
            },
            confirmPassword: {
                sameAsPassword: sameAs("password"),
            },
        },
        login: {
            phone: {
                required,
                minLength: minLength(17),
            },
            password: {
                required,
                minLength: minLength(6),
            },
        },
    },
    computed: {
        isLogin() {
            return this.$store.state.isLogin;
        },
        isRegister() {
            return this.$store.state.isRegister;
        },
    },
    methods: {
        changePasswordVisible() {
            if (this.type == "text") {
                this.type = "password";
            } else {
                this.type = "text";
            }
        },
        clickOut() {
            this.isProfile = false;
        },
        formReset() {
            this.register.name = "";
            this.register.email = "";
            this.register.phone = "";
            this.register.password = "";
            this.register.confirmPassword = "";

            this.login.phone = "";
            this.login.password = "";

            this.closeModal();
            this.$v.login.$reset();
            this.$v.register.$reset();
        },

        openLogin() {
            this.$store.commit("CHANGE_LOGIN", true);
            this.$store.commit("CHANGE_REGISTER", false);
        },
        openRegister() {
            this.$store.commit("CHANGE_LOGIN", false);
            this.$store.commit("CHANGE_REGISTER", true);
        },
        closeModal() {
            this.$store.commit("CHANGE_LOGIN", false);
            this.$store.commit("CHANGE_REGISTER", false);
        },
        handleType(event) {
            const { srcElement, type } = event;
            const { name, value } = srcElement;
            if (type === "blur" && !value) {
                this.type = "text";
            } else {
                this.type = "password";
            }
        },

        //register method
        registerUser() {
            this.$v.register.$touch();
            if (!this.$v.register.$invalid) {
                let phone = this.register.phone.replace(/[^0-9]/g, "");

                this.$axios
                    .$post("user/register", {
                        name: this.register.name,
                        email: this.register.email,
                        phone: phone,
                        password: this.register.password,
                    })
                    .then(async (res) => {
                        if (res.success) {
                            try {
                                let response = await this.$auth.loginWith(
                                    "local",
                                    {
                                        data: {
                                            phone: this.register.phone,
                                            password: this.register.password,
                                        },
                                    }
                                );

                                this.formReset();
                            } catch (err) {
                                console.log(err);
                            }
                        }
                    });
            }
        },

        //login method

        async loginUser() {
            this.$v.login.$touch();
            if (!this.$v.login.$invalid) {
                let phone = this.login.phone.replace(/[^0-9]/g, "");
                try {
                    let response = await this.$auth.loginWith("local", {
                        data: {
                            phone: phone,
                            password: this.login.password,
                        },
                    });
                    this.formReset();
                } catch (err) {
                    console.log(err);
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
header {
    padding: 10px 0px;
    box-shadow: 0px 4px 6px 0px rgb(12 0 46 / 5%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 7;
    div.header-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span.logo {
            img {
                width: 140px;
            }
        }
        div.header-right {
            display: flex;
            align-items: center;
            div.header-nav {
                ul {
                    list-style-type: none;
                    li {
                        display: inline-block;
                        margin-left: 30px;
                        position: relative;
                        padding: 20px 0px;
                        a {
                            display: block;
                            text-decoration: none;
                            color: #11142d;
                            font-size: 16px;
                            font-weight: 500;
                            transition: 0.2s;
                            &:hover {
                                color: $gc;
                            }
                            svg {
                                font-size: 12px;
                                font-weight: 400;
                            }
                            span.minus {
                                display: none;
                            }
                        }

                        ul.dropdown {
                            position: absolute;
                            display: none;
                            background-color: #fff;
                            box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
                            width: 210px;
                            z-index: 6;
                            border-radius: 5px;
                            overflow: hidden;
                            top: 55px;
                            li {
                                display: block;
                                margin-left: 0px;
                                border-bottom: 1px solid #f5f5f5;
                                padding: 0px;
                                a {
                                    padding: 10px 20px;
                                    display: flex;
                                    transition: 0.2s;

                                    span.icon-right {
                                        margin-left: -10px;
                                        opacity: 0;
                                        transition: 0.2s;
                                        margin-right: 5px;
                                        font-size: 16px;
                                    }
                                    &:hover {
                                        color: #fff;
                                        background-color: $gc;
                                        span.icon-right {
                                            margin-left: 0px;
                                            opacity: 1;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    li:hover {
                        ul.dropdown {
                            display: block;
                        }

                        a {
                            span.minus {
                                display: inline-block;
                            }
                            span.plus {
                                display: none;
                            }
                        }
                    }
                }
            }

            div.header-login {
                margin-left: 30px;
                display: flex;
                button.login {
                    color: $gc;
                    font-size: 16px;
                    color: $gc;
                    border-radius: 8px;
                    padding: 10px 20px;
                    background-color: $gh;
                    font-weight: 500;
                    border: 1px solid transparent;
                    transition: 0.2s;

                    &:hover {
                        background-color: $gc;
                        color: #fff;
                    }
                }

                div.profile {
                    display: flex;
                    position: relative;
                    button.profile {
                        display: flex;
                        align-items: center;
                        div.pro-img {
                            position: relative;
                            width: 45px;
                            height: 45px;
                            border-radius: 100%;
                            overflow: hidden;
                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                        svg {
                            font-size: 20px;
                            margin-left: 5px;
                            color: $gc;
                        }
                    }

                    div.pro-dropdown {
                        position: absolute;
                        box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 8%);
                        right: 0;
                        top: 60px;
                        background-color: #fff;
                        border-radius: 5px;
                        min-width: 180px;
                        padding: 5px;
                        h6 {
                            font-size: 13px;
                            margin: 5px 10px;
                            font-weight: 500;
                            color: $gc;
                            border-bottom: 1px solid $gh;
                            padding-bottom: 5px;
                        }
                        ul {
                            border-bottom: 1px solid $gh;
                            // margin-bottom: 5px;

                            li {
                                display: block;
                                a {
                                    font-size: 14px;
                                    color: $tc;
                                    padding: 8px 10px;
                                    display: block;
                                    font-weight: 500;
                                    border-radius: 5px;
                                    svg {
                                        margin-right: 10px;
                                    }

                                    &:hover {
                                        background-color: $gh;
                                        color: $gc;
                                    }
                                }
                            }
                        }

                        button.logout {
                            font-size: 14px;
                            font-weight: 500;
                            color: rgb(255, 87, 87);
                            padding: 5px 10px;
                            display: block;
                            width: 100%;
                            text-align: left;
                        }
                    }
                }
            }
        }
    }
}
</style>
