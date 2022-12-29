/* global VK */

/**
 * 
 * @param {*} Id - id блока куда вставлять ответ виджета ВК
 * @param {*} Uri - страница статьи которую необходимо вывести
 * @returns 
 * @description <script src="https://vk.com/js/api/openapi.js?169" type="text/javascript"></script>
 * import { vkWidgets } from '../../utils/VKWidgets';
 * <div id="vk_article_2">
                        {
                            vkWidgets(
                                "vk_article_2",
                                "@horosheeryadom-kto-takoi-rezistentnyi-krahmal"
                            )
                        }
                    </div>
 */
export function vkWidgets(Id, Uri) {
    return (
        VK.Widgets.Article(
            Id,
            Uri
        )
    )
}