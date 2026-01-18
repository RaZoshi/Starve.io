var hammermove = 0, hammerangle = 1, hammertap = false;
var shouldShowPadSemi = false;
var panStartX = 0;
var panStartY = 0
var buildingMethodG = false;

var gameTouchEndCallback = null;

var Tub = {

    items: [
        {id: 1, name: 'Nickname', k: 4.5},
        {id: 2, name: 'Nickname', k: 4.5},
        {id: 3, name: 'Nickname', k: 54.5},
        {id: 4, name: 'Nickname', k: 4.5},
        {id: 5, name: 'Nickname', k: 4.5},
        {id: 6, name: 'Nickname', k: 44.5},
        {id: 7, name: 'Nickname', k: 4.5},
        {id: 8, name: 'Nickname', k: 4.5},
        {id: 9, name: 'Nickname', k: 41.5},
        {id: 10, name: 'Nickname', k: 44.5},
    ],
    bag: null,
    book: null,


    leaderboard: null,
    leaderboardIsClosed: true,
    bookIsClosed: true,
    bagIsClosed: true,
    leaderboardIsVisible: false,
    bookIsVisible: false,
    bagIsVisible: false,
    padDirIsVisible: false,
    zoomIconIsVisible: false,
    leaderIds: [],
    leaderNames: [],
    leaderCounts: [],


    initAll: function () {
        // document.querySelector('#book_1').addEventListener('click', function () {game.craft_list.list.select (CATEGORY.TOOLS)});
        // document.querySelector('#book_2').addEventListener('click', function () {game.craft_list.list.select (CATEGORY.WEAPONS)});
        // document.querySelector('#book_3').addEventListener('click', function () {game.craft_list.list.select (CATEGORY.CLOTHES)});
        // document.querySelector('#book_4').addEventListener('click', function () {game.craft_list.list.select (CATEGORY.FOODS)});
        // document.querySelector('#book_5').addEventListener('click', function () {game.craft_list.list.select (CATEGORY.UTILS)});
        // document.querySelector('#book_6').addEventListener('click', function () {game.craft_list.list.select (CATEGORY.BASES)});
        document.querySelector('#bag_1').addEventListener('click', function () {game.quests.select()});
        document.querySelector('#bag_2').addEventListener('click', function () {game.market.select()});
        document.querySelector('#bag_3').addEventListener('click', function () {user.auto_feed.invert();});
        document.querySelector('#bag_4').addEventListener('click', function () {Tub.buildingMethodGToggle();});
        document.querySelector('#bag_5').addEventListener('click', function () {game.shop.select()});
        document.querySelector('#bag_6').addEventListener('click', function () {game.options.select_options()});
        document.querySelector('#bag_7').addEventListener('click', function () {audio.select()});
        document.querySelector('#bag_8').addEventListener('click', function () {game.craft_list.select_book()});
        document.querySelector('#zoom-icon').addEventListener('click', function () {user.bigmap = !user.bigmap});
        this.initInputStuff();
    },

    updateAll: function () {
        this.centerElement(document.querySelector('#home_craft'), Mogs.HomeCraftElement)
        this.centerElement(document.querySelector('#recipe_craft'), Mogs.RecipeCraftElement)
        this.centerElement(document.querySelector('#chronoquest'), Mogs.ChronoWindowElement)
        this.centerElement(document.querySelector('#shop_market'), Mogs.ShopMarketElement)
        this.centerElement(document.querySelector('#shop_starterkit'), Mogs.ShopStarterElement)
        this.centerElement(document.querySelector('#option_in_game'), Mogs.OptionsInGame)

        document.querySelector('#bag_3').style.opacity = user.auto_feed.enabled ? 1 : .4;
        document.querySelector('#bag_4').style.opacity = buildingMethodG ? 1 : .4;
        document.querySelector('#bag_7').style.backgroundImage = `url("../assets/bag_7${audio.run ? '' : '-off'}.png")`;
    },

    initInputStuff: function() {
        var startX = 0, startY = 0, currX = 0, currY = 0,
            deltaX = 0, deltaY = 0, touch, isDown = false,
            isMoving = false, moveLimit = 30, doesExceedMoveLimit = false,
            startTime = 0, currTime = 0, callbackTouchUpdateInterval = null,
            tapTimeLimit = 166;

        var changeOrientation = function (x, y, t, doMove) {
            var tp = t, tn = -t, ta = Math.abs(t), move;
            if (x < ta && y < tn) move = 8;
            if (x > tp && y < ta) move = 2;
            if (x < ta && y > tp) move = 4;
            if (x > tp && y < tn) move = 10;
            if (x > tp && y > tp) move = 6;
            if (x < tn && y > tp) move = 5;
            if (x < tn && y < ta) move = 1;
            if (x < tn && y < tn) move = 9;
            // // fag
            if (move === 8) hammerangle = -1.58;
            if (move === 10) hammerangle = -0.78;
            if (move === 2) hammerangle = -0.02;
            if (move === 6) hammerangle = 0.81;
            if (move === 4) hammerangle = 1.58;
            if (move === 5) hammerangle = 2.28;
            if (move === 1) hammerangle = 3.12;
            if (move === 9) hammerangle = -2.46;

            if (buildingMethodG) hammerangle =  -1 * (Math.atan2(x, y) - 1.6);
            if (doMove) hammermove = move;
        };

        var moveDo = function () {
            hammermove = 0;
            isMoving = true;
            shouldShowPadSemi = true;
            panStartX = startX;
            panStartY = startY;
            changeOrientation(deltaX, deltaY, moveLimit, true);
        };

        var moveStop = function () {
            shouldShowPadSemi = false;
            hammermove = 0;
            isMoving = false;
        };

        var callbackTouchStart = function (e) {
            if (e.target !== can) return;
            touch = e.touches[0] || e.changedTouches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            currX = startX;
            currY = startY;
            isDown = true;
            startTime = Date.now();
            callbackTouchUpdateInterval = setInterval(callbackTouchUpdate, 200);
        };
        var callbackTouchMove = function (e) {
            touch = e.touches[0] || e.changedTouches[0];
            currX = touch.clientX;
            currY = touch.clientY;
            deltaX = currX - startX;
            deltaY = currY - startY;
            doesExceedMoveLimit = (Math.abs(deltaX) > moveLimit) || (Math.abs(deltaY) > moveLimit);
            if (game.is_run){
                if (isMoving) {
                    moveDo();
                }   else {
                    if (doesExceedMoveLimit) moveDo();
                }
            }
            hammertap = false;
        };
        var callbackTouchUpdate = function (e) {
            currTime = Date.now();
            if (game.is_run && !isMoving) {
                changeOrientation(currX - canw2, currY - canh2, moveLimit, false);
                hammertap = true;
            }
        };
        var callbackTouchEnd = function (e, shouldForceEnd) {
            if (e) touch = e.touches[0] || e.changedTouches[0];
            isDown = false;
            currTime = Date.now();
            if (game.is_run) moveStop();
            hammertap = false;
            clearInterval(callbackTouchUpdateInterval);
            if (shouldForceEnd) return;
            if (user.craft.preview !== -1) return;
            if (game.is_run && (currTime - startTime) < tapTimeLimit) {
                changeOrientation(currX - canw2, currY - canh2, moveLimit, false);
                hammertap = true;
            }
        };
        document.addEventListener('touchstart', callbackTouchStart);
        document.addEventListener('touchmove', callbackTouchMove);
        document.addEventListener('touchend', callbackTouchEnd);
        document.addEventListener('touchcancel', callbackTouchEnd);
        gameTouchEndCallback = callbackTouchEnd;
    },

    initBook: function () {
        // var bookTog = document.querySelector('#book-toggle');
        // var togBtn = document.querySelector('#book-toggle-button'),
        //     togIco = document.querySelector('#book-toggle-icon');
        // var togFun = function () {
        //     this.bookIsClosed = !this.bookIsClosed;
        //     bookTog.className = this.bookIsClosed ? 'controls_list inactive' : 'controls_list';
        // }
        // togBtn.addEventListener('click', togFun.bind(this));
        // togIco.addEventListener('click', togFun.bind(this));
        //
        // bookTog.className = 'controls_list inactive';
    },

    initBag: function () {
        var bagTog = document.querySelector('#bag-toggle');
        var togBtn = document.querySelector('#bag-toggle-button'),
            togIco = document.querySelector('#bag-toggle-icon');
        var togFun = function () {
            this.bagIsClosed = !this.bagIsClosed;
            bagTog.className = this.bagIsClosed ? 'controls_list inactive' : 'controls_list';
        }
        togBtn.addEventListener('click', togFun.bind(this));
        togIco.addEventListener('click', togFun.bind(this));

        bagTog.className = 'controls_list inactive';
    },


    initLeaderboard: function () {
        var elParent = document.querySelector('.leaderboard_items');
        var ldbTog = document.querySelector('#leaderboard-toggle');
        var ldbScore = document.querySelector('.leaderboard_score');
        for (var i = 0; i < 10; i++) {
            var elItem = document.createElement('div'),
                elId = document.createElement('span'),
                elName = document.createElement('span'),
                elCount = document.createElement('span');
            elItem.className = 'item';
            elId.className = 'leaderid';
            elName.className = 'leadername';
            elCount.className = 'leadercount';
            elItem.appendChild(elId);
            elItem.appendChild(elName);
            elItem.appendChild(elCount);
            elParent.appendChild(elItem);
            this.leaderIds.push(elId);
            this.leaderNames.push(elName);
            this.leaderCounts.push(elCount);
        }

        var toggleBtn = document.querySelector('#leaderboard-toggle-btn'),
            togFun = function (evt) {
                evt.preventDefault();
                this.leaderboardIsClosed = !this.leaderboardIsClosed;
                toggleBtn.className = this.leaderboardIsClosed ? 'open' : 'close';
                ldbTog.className = this.leaderboardIsClosed ? 'leaderboard inactive' : 'leaderboard';
            }.bind(this);
        toggleBtn.addEventListener('click', togFun);
        ldbScore.addEventListener('click', togFun);

        toggleBtn.className = 'open';
        ldbTog.className = 'leaderboard inactive';
    },

    initPadDir: function () {
        var padDir = document.querySelector('#pad-dir');

    },

    updateLeaders: function () {

        var ldb = user.ldb, players = world.players,
            ids = ldb.ids, color, in_ldb = false;

        if (ldb.update) {
            ldb.update = false;


            for (var i = 0; i < ids.length; i++) {

                var p = players[ids[i]];

                if (world.mode === WORLD.MODE_HUNGER_GAMES && p.nickname === "spectator")
                    continue;
                if (world.mode === WORLD.MODE_ZOMBIES && p.skin === WORLD.ZOMBIE_SKIN)
                    continue;

                if (ids[i] == user.id) {

                    /* Ok player is in the leaderboard, so do not draw points */
                    in_ldb = true;
                    if (world.mode === WORLD.MODE_VAMPIRES && p.skin === WORLD.VAMPIRE_SKIN)
                        color = "#FF0000";
                    else
                        color = "#FFF";
                } else {

                    if (world.mode === WORLD.MODE_VAMPIRES && p.skin === WORLD.VAMPIRE_SKIN)
                        color = "#990000";
                    else
                        color = "#A1BDCD";
                }

                this.leaderIds[i].innerText = `${i + 1}`;
                this.leaderNames[i].innerText = p.nickname;
                this.leaderCounts[i].innerText = Utils.simplify_number (p.score);
            }


            document.querySelector('#leaderboard_score_txt').innerText = `Score: ${world.players[user.id].score}`;

        }


    },
    updateMyScore: function (score) {
        var el = document.getElementById(`leaderboard_score_txt`);
    },

    updateLeaderBagBookVisibility: function (isVisible) {
        // isVisible = true;
        this.leaderboardIsVisible = isVisible;
        this.bagIsVisible = isVisible;
        this.bookIsVisible = isVisible;
        this.padDirIsVisible = isVisible;
        this.zoomIconIsVisible = isVisible;
        var vl = isVisible ? 'flex' : 'none';
        document.querySelector('#leaderboard-container').style.display = vl;
        document.querySelector('#bag-toggle').style.display = vl;
        // document.querySelector('#book-toggle').style.display = vl;
        document.querySelector('#pad-dir').style.display = vl;
        document.querySelector('#zoom-icon').style.display = vl;
        if (!isVisible) {
            if (!this.leaderboardIsClosed) document.querySelector('#leaderboard-toggle-btn').click();
            if (!this.bagIsClosed) document.querySelector('#bag-toggle-button').click();
        }
    },

    updateLeaderboardScaling: function () {
        if (!this.leaderboardIsVisible) return;
        var mog = Mogs.GameLeadBoardElement, component = document.querySelector('#leaderboard-container');
        var sideRatio, minDimension, finalScale, size = mog.size;
        size.x = mog.w;
        size.y = mog.h;
        sideRatio = size.x / size.y;
        minDimension = Math.min(canw, canh);
        finalScale = mog.s * minDimension;
        size.x = finalScale;
        size.y = size.x / sideRatio;
        mog.scale = size.x / mog.w;
        var translateX = canw - (mog.w);
        mog.translate.x = translateX - (30 * mog.scale);
        mog.translate.y = (30 * mog.scale);
        component.style.transformOrigin = 'top right';
        component.style.transform = `translate(${mog.translate.x}px, ${mog.translate.y}px) scale(${mog.scale})`;
    },

    updateBagScaling: function () {
        if (!this.bagIsVisible) return;
        var mog = Mogs.BaggBoardElement, component = document.querySelector('#bag-toggle');
        var sideRatio, minDimension, finalScale, size = mog.size;
        size.x = mog.w;
        size.y = mog.h;
        sideRatio = size.x / size.y;
        minDimension = Math.min(canw, canh);
        finalScale = mog.s * minDimension;
        size.x = finalScale;
        size.y = size.x / sideRatio;
        mog.scale = size.x / mog.w;
        var translateY = canh - (mog.h);
        // component.style.transformOrigin = 'bottom left';
        // component.style.transform = `translate(0px, ${translateY}px) scale(${mog.scale})`;
        // mog.translate.x = 0;
        // mog.translate.y = translateY;
        var pmog = Mogs.ClockCanvas;
        mog.translate.x = Mogs.GameInvBtn.translate.x;
        mog.translate.y = pmog.translate.y + (200 * mog.scale);
        component.style.transformOrigin = 'top left';
        component.style.transform = `translate(${mog.translate.x}px, ${mog.translate.y}px) scale(${mog.scale})`;
    },

    updateBookScaling: function () {
        // if (!this.bookIsVisible) return;
        // var mog = Mogs.BookBoardElement, component = document.querySelector('#book-toggle');
        // var sideRatio, minDimension, finalScale, size = mog.size;
        // size.x = mog.w;
        // size.y = mog.h;
        // sideRatio = size.x / size.y;
        // minDimension = Math.min(canw, canh);
        // finalScale = mog.s * minDimension;
        // size.x = finalScale;
        // size.y = size.x / sideRatio;
        // mog.scale = size.x / mog.w;
        // var translateY = canh - (mog.h);
        // // component.style.transformOrigin = 'bottom left';
        // // component.style.transform = `translate(0px, ${translateY}px) scale(${mog.scale})`;
        // // mog.translate.x = 0;
        // // mog.translate.y = translateY;
        // var pmog = Mogs.GameInvBtn;
        // component.style.transformOrigin = 'top left';
        // component.style.transform = `translate(${pmog.translate.x}px, ${pmog.translate.y - (150 * mog.scale)}px) scale(${mog.scale})`;
    },

    updatePadDirScaling: function () {
        if (!this.padDirIsVisible) return;
        var mog = Mogs.PadDirElement, component = document.querySelector('#pad-dir');;
        var sideRatio, minDimension, finalScale, size = mog.size;
        size.x = mog.w;
        size.y = mog.h;
        sideRatio = size.x / size.y;
        minDimension = Math.min(canw, canh);
        finalScale = mog.s * minDimension;
        size.x = finalScale;
        size.y = size.x / sideRatio;
        mog.scale = size.x / mog.w;
        mog.translate.x = (canw - mog.w) - (20 * mog.scale);
        mog.translate.y = (canh - mog.h) - (20 * mog.scale);
        component.style.transformOrigin = 'bottom right';
        component.style.transform = `translate(${mog.translate.x}px, ${mog.translate.y}px) scale(${mog.scale})`;
    },

    updateZoomIconScaling: function () {
        if (!this.zoomIconIsVisible) return;
        var mog = Mogs.ZoomIconElement, component = document.querySelector('#zoom-icon');
        var sideRatio, minDimension, finalScale, size = mog.size;
        size.x = mog.w;
        size.y = mog.h;
        sideRatio = size.x / size.y;
        minDimension = Math.min(canw, canh);
        finalScale = mog.s * minDimension;
        size.x = finalScale;
        size.y = size.x / sideRatio;
        mog.scale = size.x / mog.w;
        mog.translate.x = (canw - mog.w) - (10 * mog.scale);
        mog.translate.y = (canh - mog.h) - (300 * mog.scale);
        component.style.transformOrigin = 'bottom right';
        component.style.transform = `translate(${mog.translate.x}px, ${mog.translate.y}px) scale(${mog.scale})`;
    },

    centerElement: function (el, mog) {
        mog.size.x = mog.w;
        mog.size.y = mog.h;
        var sideRatio = mog.size.x / mog.size.y;
        var minDimension = Math.min(canw, canh);
        var finalScale = mog.s * minDimension;
        mog.size.x = finalScale;
        mog.size.y = mog.size.x / sideRatio;
        mog.translate.x = canw2 - (mog.w / 2);
        mog.translate.y = canh2 - (mog.h / 2);
        mog.scale = finalScale / mog.w;

        el.style.transformOrigin = `center center`;
        el.style.transform = `translate(${mog.translate.x}px, ${mog.translate.y}px) scale(${mog.scale})`;
    },

    checkRatioAndAdjustMog: function () {
        var isSquare = (canw / canh) < 1.5;
        Mogs.DurationBox.s = (isSquare) ? .8 : 1;
        Mogs.LocationBox.s = (isSquare) ? .8 : 1;
        Mogs.BuyBreadBox.s = (isSquare) ? .8 : 1;
        Mogs.ShopBox.s = (isSquare) ? .76 : 1.1;
        Mogs.LogoInterface.s = (isSquare) ? .6 : .8;
        Mogs.SkinsBaseBox.s = (isSquare) ? .7 : 1;
        Mogs.TrevdaElement.s = (isSquare) ? .2 : .25;
        Mogs.LinksBg.s = (isSquare) ? .4 : .55;
        Mogs.AvatarResume.s = (isSquare) ? .4 : .5;
        Mogs.ChangelogBox.s = (isSquare) ? .5 : .6;
        Mogs.LangselectElement.s = (isSquare) ? .15 : .2;
        Mogs.AllRightsElement.s = (isSquare) ? .5 : .6;
        Mogs.LeaderboardBox.s = (isSquare) ? .8 : 1;
        Mogs.TutorialBox.s = (isSquare) ? .9 : 1.15;
        Mogs.ScoreboardElement.s = (isSquare) ? .8 : 1.15;

        Mogs.HoverNormalMode.ty = (isSquare) ? -400 : -320;
        Mogs.HoverForestMode.ty = (isSquare) ? -400 : -320;
        Mogs.HoverCommunMode.ty = (isSquare) ? -400 : -320;
        Mogs.HoverZombieMode.ty = (isSquare) ? -400 : -320;
        Mogs.HoverVampirMode.ty = (isSquare) ? -400 : -320;
        Mogs.HoverExperiMode.ty = (isSquare) ? -400 : -320;

        Mogs.ClockCanvas.s = (isSquare) ? .1 : .2;
        Mogs.GaugesCanvas.s = (isSquare) ? .5 : .7;
        Mogs.GameLeadBoardElement.s = (isSquare) ? .2 : .4;
        Mogs.PadDirElement.s = (isSquare) ? .17 : .3;
        Mogs.ZoomIconElement.s = (isSquare) ? .06 : .1;
        Mogs.GameInvBtn.s = (isSquare) ? .08 : .13;
        Mogs.BaggBoardElement.s = (isSquare) ? .5 : 1;
        Mogs.BookBoardElement.s = (isSquare) ? .5 : 1;

        Mogs.ProfileBoxMenu.s = (isSquare) ? .7 : 1.2;

        Mogs.Spin1Bkg.s = (isSquare) ? .8 : 1.5;
        Mogs.Spin2Bkg.s = (isSquare) ? .8 : 1.5;
        Mogs.Spin3Bkg.s = (isSquare) ? .8 : 1.5;
        Mogs.Spin4Bkg.s = (isSquare) ? .8 : 1.5;
        Mogs.Spin5Bkg.s = (isSquare) ? .8 : 1.5;
        Mogs.Spin6Bkg.s = (isSquare) ? .8 : 1.5;
    },

    buildingMethodGToggle: function () {
        buildingMethodG = !buildingMethodG;
        document.querySelector('#bag_4').style.opacity = buildingMethodG ? 1 : .4;
    }
};


window.oncontextmenu = function(event) {
    event.preventDefault();
    event.stopPropagation(); // not necessary in my case, could leave in case stopImmediateProp isn't available?
    event.stopImmediatePropagation();
    return false;
};
