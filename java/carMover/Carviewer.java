 
/**
 * @(#)Carviewer.java
 *
 * show ugly car
 * @author Kalea Gin 
 * @version 1.00 2021/11/3
 */
 
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLayeredPane;
import javax.swing.Timer;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.BorderLayout;
 
public class CarViewer {
    public static void main(String[] args) {
        JFrame frame = new JFrame();
        frame.setSize(300, 400);
        frame.setTitle("Cars");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 
        final CarComponent component = new CarComponent();
        frame.add(component);//, BorderLayout.NORTH);
        

        
        frame.setVisible(true);
        
 
        class TimerListener implements ActionListener {
            public void actionPerformed(ActionEvent event) {
                component.moveBy(1, 0);
            }
        }
        
        ActionListener l = new TimerListener();
        final int DELAY = 100;
        Timer t = new Timer(DELAY, l);
        t.start();
    }
}
 
