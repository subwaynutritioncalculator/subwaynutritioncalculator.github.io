

//   ------------------Bottom Script-----------------

/*<![CDATA[*/

const locationId = 25;
const webname = "subway";
const userId = 0;
const dbDietValue = 2000;
const isThisPremium = 0;
const isThisPreview = 0;
const isThisNotLocal = 1;
const showBasket = 0;
const baseUrl = "https://www.nutritionix.com/";
const usingAndroid = 0;
const showDebugCode = 0;
const defaultDropDownText = "Please Select";
const disableBeginnerTooltip = 0;
const enable_calculator_focus_on_load = 1;
const enable_allergen_on_the_calculator = 0;
const show_calculator_info_serving_weight = 0;
const extra_portions_modifiers_show_first_on_calc = 1;
var highlightColor = "#B5EF89";
var highlightColorNoHash = "B5EF89";
const loadData = "";
const textViewAllIngredients = "View All Ingredients";
const textServingForCalculatorLabel = "Serving Size:";
const textMultipleItemsForCalculatorLabel = "Multiple Items";

const desktopCalculatorShareButton = "Share";

const desktopCalculatorJsRefreshPage = "There was an error loading the calculator, please SYSTEM_CLICK_HERE to refresh this page";
const desktopCalculatorJsRefreshPageClickHere = "click here";
const desktopCalculatorJsSystemError = "A network error has occurred. Please contact a system administrator at enterprise@nutritionix.com. Error code: CORS";
const desktopCalculatorJsItemAlreadyInBasket = "This item already exists in your basket. You can change the quantity of the item, or select another item to calculate";
const desktopCalculatorJsProcessing = "Processing";
const desktopCalculatorJsResetMessage = "Calculator has been reset";
const desktopCalculatorJsLabelUndo = "Undo?";
const desktopCalculatorJsErrorOnUndo = "There is a problem using the start over function. Please contact the site&rsquo;s administrators";

const desktopCalculatorJsLabelAfterShare = "Selected";

const desktopCalculatorJsCantDecreaseValue = "You can&rsquo;t decrease this value anymore";
const desktopCalculatorJsEnterGreaterThanZero = "Please enter a value greater than zero. To remove an ingredient, please click on the red remove button";
const desktopCalculatorJsEnterValidValue = "Please enter a valid value";
const desktopCalculatorJsEnterGreaterThan1k = "Please enter a value greater than or equal to 1000";
const desktopCalculatorJsDietChangeSuccess = "You have successfully changed your default calorie diet";
const desktopCalculatorJsMissingModInfo = "Missing Modifier info";
const desktopCalculatorJsCalcuError = "The calculator experienced an error. Please report this to the administrator";
const labelAndHeaderTextCalories = "Calories";
const labelAndHeaderTextTotalFat = "Total Fat";
const labelAndHeaderTextSatFatForCalcu = "Sat Fat";
const labelAndHeaderTextCholesterol = "Cholesterol";
const labelAndHeaderTextSodium = "Sodium";
const labelAndHeaderTextTotalCarbForCalcu = "Carbs";
const labelAndHeaderTextFibersForCalcu = "Fiber";
const labelAndHeaderTextSugars = "Sugars";
const labelAndHeaderTextSugarAlcohol = "Sugar Alcohol";
const labelAndHeaderTextProteins = "Protein";
const desktopCalculatorJsBuildMealFirst = "You must build a meal before you can share it";
const desktopCalculatorJsWaitBeforeSaving = "Please wait 5 seconds before saving another meal";
const labelIngredientList = "None";
const desktopCalculatorJsSelectItem = "Select Item";
const desktopCalculatorJsMaxSelectMsg = "You can select up to SYSTEM_MAX_SELECT options in this group";
const desktopCalculatorJsNoIngredients = "No Ingredients";
const desktopCalculatorJsServingWeight = "Serving Weight";
const desktopCalculatorJsYourMeal = "Your Meal";
const modalClose = "Close";
const desktopCalculatorJsDoneWith = "Done With";
const desktopCalculatorJsNutritionInfo = "Nutrition Info";
const desktopCalculatorJsQuantity = "Quantity";
const desktopCalculatorJsCustomMealFrom = "Custom Meal from";
const desktopCalculatorJsGramWeight = "Gram Weight";
const mobileDescription = "Description";
const mobileCalculatorIngredients = "Ingredients";
const calc_ingredients_label = "INGREDIENTS: ";

// API urls
const calculatorInitUrl = "/assets/Subway_Nutrition_assest/scripts_Subway_Nutrition/SNC_3.js";

const dailyValue = {
    total_fat: 65,
    saturated_fat: 20,
    cholesterol: 300,
    sodium: 2400,
    total_carb: 300,
    fibers: 25,
    potassium: 4700,
    calcium: 1300,
    iron: 18,
    vitamin_d: 20,
    added_sugars: 50,
    sugars: 1,
    energy_kcal: 1,
    protein: 1,
    salt: 1
};

const hide_percent_daily_value_on_calculator_and_inm = 0;
const showDailyValue = {
    total_fat: 1,
    saturated_fat: 1,
    cholesterol: 1,
    sodium: 1,
    total_carb: 1,
    fibers: 1,
    potassium: 1,
    calcium: 1,
    iron: 1,
    vitamin_d: 1,
    added_sugars: 1,
    sugars: 0,
    energy: 1,
    protein: 1
};

//textLoremIpsumFormat are for the jquery nutrition label plugin; the rest are for other text on the calculator js file
const globalLanguageForTheLabel = {
    textNutritionFacts: "Nutrition Facts",
    textDailyValues: "Daily Value",
    textServingsPerContainer: "Servings Per Container:",
    textAmountPerServing: "Amount Per Serving",
    textCalories: "Calories",
    textFatCalories: "Calories from Fat",
    textTotalFat: "Total Fat",
    textSatFat: "Saturated Fat",
    textTransFat: "<em>Trans</em> Fat",
    textPolyFat: "Polyunsaturated Fat",
    textMonoFat: "Monounsaturated Fat",
    textCholesterol: "Cholesterol",
    textSodium: "Sodium",
    textPotassium: "Potassium",
    textCaffeine: "Caffeine",
    textTotalCarb: "Total Carbohydrates",
    textFibers: "Dietary Fiber",
    textSugars: "Sugars",
    textSugarAlcohol: "Sugar Alcohol",
    textProteins: "Protein",
    textVitaminA: "Vitamin A",
    textVitaminC: "Vitamin C",
    textCalcium: "Calcium",
    textIron: "Iron",
    textAddedSugars1: "Includes",
    textAddedSugars2: "Added Sugars",
    textVitaminD: "Vitamin D",
    ingredientLabel: "Ingredients",
    textPercentDailyPart1: "Percent Daily Values are based on a",
    textPercentDailyPart2: "calorie diet",
    textUKTypicalValues: "Typical Values",
    textUKReferenceIntake: "Reference intake of an average adult",
    textUKPer100: "Per",
    textDataNotAvailable: "Data not available",
    textNotApplicable: "<img class=\"nix-tiny-logo\" aria-label=\"Data not available\" src=\"/images/tiny-logo.png\" alt=\"not applicable\">",

    desktop_calculator_mod_info_tooltip: "Modifier Information Tooltip",
    desktop_calculator_delete_modifier: "Delete the Modifier",
    desktop_calculator_delete_added_modifier: "Delete the Added Modifier",
    desktop_calculator_increase_quantity: "Increase the Quantity",

    desktop_calculator_decrease_quantity: "Decrease the Quantity",
    desktop_calculator_item_info_tooltip: "Menu Item Information Tooltip",
    desktop_calculator_delete_added_modifier: "Delete the Added Modifier",
    desktop_calculator_delete_modifier: "Delete the Modifier",

    desktop_calculator_from_basket_suffix: "From My Basket",
    desktop_calculator_modify_prefix: "Modify",
    desktop_calculator_grams: "grams",
    desktop_calculator_milliliters: "milliliters",
    desktop_calculator_count_of: "count of",

    desktop_calculator_select_modifiers: "Select Modifiers",
    desktop_calculator_select_a_modifier: "Select a Modifier",
    desktop_calculator_select_portion: "Select a Portion",
    desktop_calculator_select_menu_item: "Select a Menu Item",

    desktop_calculator_delete_item_from_basket: "Delete the Menu Item from the Basket",
    desktop_calculator_js_quantity: "Quantity",
    remove_text: "Remove",
    misc_filter_information: "filter information",
    mobile_calculator_ingredients: "Ingredients"
};

const labelPluginWidth = 335;

const labelPluginFooter = "<div class=\"labellight dvlabel2 alignC\" id=\"calcDisclaimer\"><a href=\"#\" id=\"btnDisclaimer\" rel=\"nofollow\">Disclaimer</a></div><div class=\"labellight dvlabel2 alignC\" id=\"calclabelFooter\"></div>";

const labelPluginFooterForPrint = "<div class=\"labellight dvlabel2 alignC\" id=\"calclabelFooter\"><br/></div>";

const fullDisclaimerForPrint = "<div class=\"labellight dvlabel2 alignC\" id=\"calcDisclaimer\"><br/><span id=\"calcDisclaimerText\">Please note that these nutrition values are estimated based on our standard serving portions. As food servings may have a slight variance each time you visit, please expect these values to be with in 10% +/- of your actual meal. If you have any questions about our nutrition calculator, please contact Nutritionix.</span></div>";

jQuery('#modalFullDisclaimer').dialog({
    'title': '', 'autoOpen': false, 'resizable': false, 'modal': true, 'width': 550, 'height': 368, 'zIndex': 10000, 'classes': { 'ui-dialog': 'dialogModal commonModal' }, 'position': { my: "top", at: "top", of: ".column2Holder" }, 'close': function (event, ui) {
    }
});
jQuery('#modalCalcIngredients').dialog({
    'title': 'All Ingredients', 'autoOpen': false, 'resizable': false, 'modal': true, 'width': 550, 'height': 390, 'zIndex': 10000, 'classes': { 'ui-dialog': 'dialogModal commonModal' }, 'position': { my: "top", at: "top", of: ".column2Holder" }, 'close': function (event, ui) {
    }
});

//Disclaimer Text
$(document).ready(function () {
    $('#disclaimerText').height(function () {
        if ($(this).height() >= 400) {
            $(this).addClass('overflow');
        }
    });


    $('#nutritionLabel').delegate('#btnIngredient', 'click', function (e) {
        e.preventDefault();
        $('#modalCalcIngredients').dialog('open')
    });


    $('body').delegate('#btnIngredientClose', 'click', function (e) {
        e.preventDefault();
        $('#modalCalcIngredients').dialog('close')

        //the focus will be gone at this point so this is to keep the keyboard focus alive
        $('#item_category_id').focus();
    });


    $('#nutritionLabel').delegate('#btnDisclaimer', 'click', function (e) {
        e.preventDefault();
        $('#modalFullDisclaimer').dialog('open')
    });


    $('#modalCalcIngredients').delegate('#btnDisclaimer2', 'click', function (e) {
        e.preventDefault();
        $('#modalFullDisclaimer').dialog('open');
    });


    $('body').delegate('#btnDisclaimerClose', 'click', function (e) {
        e.preventDefault();
        $('#modalFullDisclaimer').dialog('close')

        //the focus will be gone at this point so this is to keep the keyboard focus alive
        $('#item_category_id').focus();
    });

});


// Search
var searchForm = $('#search');
searchForm.keydown(function () {
    $(this).find('.holder').hide();
    $('#tip').stop().hide().unbind('show hide');
});

searchForm.find('input').blur(function () {
    if (searchForm.find('#q').val() == '') {
        searchForm.find('.holder').show();
    }
});

searchForm.find('.holder').click(function () {
    var typeahead = $('#q').data('typeahead');
    typeahead && typeahead.focus();
});

$('#search').submit(function () {
    var term = $.trim($('#q').val());
    if (term == '' || term == 'Search restaurants or foods') {
        showMessage.error({ text: ['Please enter a search term.'], autoClose: false });
        return false;
    }
});

$('#feedback-tab').click(function (e) {
    e.preventDefault();
    $('#showFocus').val(0);
    $('#modal-feedback').dialog('open');
});


$('body > .block').click(function (e) {
    var $target = $(e.target);
    if (
        $target.attr('id') != 'forgotPass' &&
        $target.attr('id') != 'forgotPass2' &&
        $target.attr('class') != 'fb_button_text'
    ) {
        e.stopPropagation();
    }
});

$(document).click(function () {
    $('body > .block').hide();
    $('#navUtil li a').removeClass('active');
});

$(window).resize(function () {
    var navItem = $('#navUtil li a');
    if (navItem.hasClass('active')) {
        $('.block:visible').css('right', $(document).width() - 1 - ($('#navUtil li a.active').offset().left + $('#navUtil li a.active').outerWidth()));
    }
})

jQuery(function ($) {
    $(function () {
        const connectButton = $('#connect-button');
        var food = null;
        if (connectButton.length > 0) {
            connectButton.on('click', function (e) {
                e.preventDefault();

                if (food) {
                    window.trackPopup.open(food);
                }

                return false;
            });

            $('#nutritionLabel').on('data-updated', function (event, nutritionData) {
                $('#connect-button').show();
                food = nutritionData;
            });
        }
    });
    function adBlockDetected() {
        window.ga && ga(
            'send',
            'event',
            'Regular Calculator',
            'AdBlocked',
            'Subway'
        );
    }

    // Recommended audit because AdBlock lock the file 'blockadblock.js'
    // If the file is not called, the variable does not exist 'blockAdBlock'
    // This means that AdBlock is present
    if (typeof blockAdBlock === 'undefined') {
        adBlockDetected();
    } else {
        blockAdBlock.on(true, adBlockDetected);
    }
});
   /*]]>*/