<?php
/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @param $form
 *   The form.
 * @param $form_state
 *   The form state.
 */
function zurb_form_system_theme_settings_alter(&$form, &$form_state) {
     /*
     * Social Links.
     */
    $form['zurb']['social'] = array(
      '#type' => 'fieldset',
      '#title' => t('Social Links'),
      '#collapsible' => TRUE,
    );
    
    $form['zurb']['social']['zurb_facebook_text'] = array(
      '#type' => 'textfield',
      '#title' => t('Facebook'),
      '#description' => t('Give facebook path here.'),
      '#default_value' => theme_get_setting('zurb_facebook_text'),
      '#states' => array(
        'visible' => array(
          'input[name="zurb_facebook_enable"]' => array('checked' => TRUE),
          'select[name="zurb_facebook_mode"]' => array('value' => 'text'),
        ),
      ),
    );
    $form['zurb']['social']['zurb_twitter_text'] = array(
      '#type' => 'textfield',
      '#title' => t('Twtter'),
      '#description' => t('Give twitter path here.'),
      '#default_value' => theme_get_setting('zurb_twitter_text'),
      '#states' => array(
        'visible' => array(
          'input[name="zurb_twitter_enable"]' => array('checked' => TRUE),
          'select[name="zurb_twitter_mode"]' => array('value' => 'text'),
        ),
      ),
    );    $form['zurb']['social']['zurb_linkedin_text'] = array(
      '#type' => 'textfield',
      '#title' => t('Linkedin'),
      '#description' => t('Give linkedin path here.'),
      '#default_value' => theme_get_setting('zurb_tooltip_text'),
      '#states' => array(
        'visible' => array(
          'input[name="zurb_linkedin_enable"]' => array('checked' => TRUE),
          'select[name="zurb_linkedin_mode"]' => array('value' => 'text'),
        ),
      ),
    );    $form['zurb']['social']['zurb_google_text'] = array(
      '#type' => 'textfield',
      '#title' => t('Google+'),
      '#description' => t('Give google path here.'),
      '#default_value' => theme_get_setting('zurb_google_text'),
      '#states' => array(
        'visible' => array(
          'input[name="zurb_google_enable"]' => array('checked' => TRUE),
          'select[name="zurb_google_mode"]' => array('value' => 'text'),
        ),
      ),
    );    $form['zurb']['social']['zurb_youtube_text'] = array(
      '#type' => 'textfield',
      '#title' => t('Youtube'),
      '#description' => t('Give youtube path here.'),
      '#default_value' => theme_get_setting('zurb_youtube_text'),
      '#states' => array(
        'visible' => array(
          'input[name="zurb_youtube_enable"]' => array('checked' => TRUE),
          'select[name="zurb_youtube_mode"]' => array('value' => 'text'),
        ),
      ),
    );
}
